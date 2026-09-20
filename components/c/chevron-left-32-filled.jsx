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
		"content": `<style>.ucw6zypdp {
  fill: currentColor;
  d: path("M20.884 5.366a1.25 1.25 0 0 1 0 1.768L12.018 16l8.866 8.866a1.25 1.25 0 0 1-1.768 1.768l-9.75-9.75a1.25 1.25 0 0 1 0-1.768l9.75-9.75a1.25 1.25 0 0 1 1.768 0");
}
</style><path class="ucw6zypdp"/>`,
		"fallback": "fluent:chevron-left-32-filled",
	});
}

export default Component;
