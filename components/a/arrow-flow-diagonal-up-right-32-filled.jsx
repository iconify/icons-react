import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ho6drab1u {
  fill: currentColor;
  d: path("M17 5a1 1 0 1 0 0 2h6.586L11.618 18.968a5.5 5.5 0 1 0 1.414 1.414L25 8.415V15a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1z");
}
</style><path class="ho6drab1u"/>`,
		"fallback": "fluent:arrow-flow-diagonal-up-right-32-filled",
	});
}

export default Component;
