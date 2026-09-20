import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dsfi-6pgv {
  fill: currentColor;
  d: path("M8.997 2.385a1.5 1.5 0 0 1 2.006 0l5.5 4.95A1.5 1.5 0 0 1 17 8.45v7.055a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5V8.45c0-.425.18-.83.497-1.115z");
}
</style><path class="dsfi-6pgv"/>`,
		"fallback": "fluent:home-empty-20-filled",
	});
}

export default Component;
