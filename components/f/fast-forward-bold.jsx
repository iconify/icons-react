import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g8wjtubev {
  fill: currentColor;
  d: path("m246.81 111.29l-88.18-56.17A19.91 19.91 0 0 0 128 71.84v30L54.63 55.12A19.91 19.91 0 0 0 24 71.84v112.32a19.93 19.93 0 0 0 30.63 16.72L128 154.15v30a19.93 19.93 0 0 0 30.63 16.72l88.18-56.17a19.79 19.79 0 0 0 0-33.42ZM48 176.64V79.36L124.38 128Zm104 0V79.36L228.38 128Z");
}
</style><path class="g8wjtubev"/>`,
		"fallback": "ph:fast-forward-bold",
	});
}

export default Component;
