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
		"content": `<style>.tfmas8sdw {
  fill: currentColor;
  d: path("M9.646 4.146a.5.5 0 1 1 .707.708L5.208 10l5.147 5.147a.5.5 0 1 1-.708.707l-5.5-5.5a.5.5 0 0 1 0-.708zm5 0a.5.5 0 1 1 .707.708L10.208 10l5.147 5.147a.5.5 0 1 1-.707.707l-5.5-5.5a.5.5 0 0 1 0-.708z");
}
</style><path class="tfmas8sdw"/>`,
		"fallback": "fluent:chevron-double-left-20-regular",
	});
}

export default Component;
