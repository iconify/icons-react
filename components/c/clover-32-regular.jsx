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
		"content": `<style>.id4ovcknd {
  fill: currentColor;
  d: path("M8.5 2a6.5 6.5 0 0 0 0 13H14a1 1 0 0 0 1-1V8.5A6.5 6.5 0 0 0 8.5 2M4 8.5a4.5 4.5 0 0 1 9 0V13H8.5A4.5 4.5 0 0 1 4 8.5M8.5 30a6.5 6.5 0 1 1 0-13H14a1 1 0 0 1 1 1v5.5A6.5 6.5 0 0 1 8.5 30M4 23.5a4.5 4.5 0 1 0 9 0V19H8.5A4.5 4.5 0 0 0 4 23.5m26-15a6.5 6.5 0 1 0-13 0V14a1 1 0 0 0 1 1h5.5A6.5 6.5 0 0 0 30 8.5M23.5 4a4.5 4.5 0 1 1 0 9H19V8.5A4.5 4.5 0 0 1 23.5 4m0 26a6.5 6.5 0 1 0 0-13H18a1 1 0 0 0-1 1v5.5a6.5 6.5 0 0 0 6.5 6.5m4.5-6.5a4.5 4.5 0 1 1-9 0V19h4.5a4.5 4.5 0 0 1 4.5 4.5");
}
</style><path class="id4ovcknd"/>`,
		"fallback": "fluent:clover-32-regular",
	});
}

export default Component;
