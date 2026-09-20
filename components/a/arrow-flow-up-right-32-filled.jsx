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
		"content": `<style>.nyhu3jfur {
  fill: currentColor;
  d: path("M23.207 2.293a1 1 0 1 0-1.414 1.414L26.586 8.5H19a4 4 0 0 0-4 4v7a2 2 0 0 1-2 2h-.09A5.502 5.502 0 0 0 2 22.5a5.5 5.5 0 0 0 10.91 1H13a4 4 0 0 0 4-4v-7a2 2 0 0 1 2-2h7.586l-4.793 4.793a1 1 0 0 0 1.414 1.414l6.5-6.5a1 1 0 0 0 0-1.414z");
}
</style><path class="nyhu3jfur"/>`,
		"fallback": "fluent:arrow-flow-up-right-32-filled",
	});
}

export default Component;
