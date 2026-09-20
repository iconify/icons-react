import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g1tqpuu5q {
  fill: currentColor;
  d: path("M20 21V3h1v18zm-5.5-4.5v-9h2v9zm-6 0v-9h2v9z");
}
</style><path class="g1tqpuu5q"/>`,
		"fallback": "material-symbols-light:align-justify-flex-end-outline",
	});
}

export default Component;
