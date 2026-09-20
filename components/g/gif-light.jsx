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
		"content": `<style>.pvm7_abtl {
  fill: currentColor;
  d: path("M142 72v112a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0m90-6h-56a6 6 0 0 0-6 6v112a6 6 0 0 0 12 0v-50h42a6 6 0 0 0 0-12h-42V78h50a6 6 0 0 0 0-12M96 122H72a6 6 0 0 0 0 12h18v18a26 26 0 0 1-52 0v-48a26 26 0 0 1 26-26c12.07 0 23.33 8.38 26.19 19.5a6 6 0 1 0 11.62-3C97.56 78 81.66 66 64 66a38 38 0 0 0-38 38v48a38 38 0 0 0 76 0v-24a6 6 0 0 0-6-6");
}
</style><path class="pvm7_abtl"/>`,
		"fallback": "ph:gif-light",
	});
}

export default Component;
