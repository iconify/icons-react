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
		"content": `<style>.ev4_m-b0l {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-16 72h16v48h-16Zm16-16h-16V48h16ZM48 48h128v160H48Zm160 160h-16v-40h16zm-56.25-42a39.76 39.76 0 0 0-17.19-23.34a32 32 0 1 0-45.12 0A39.84 39.84 0 0 0 72.25 166a8 8 0 0 0 15.5 4c2.64-10.25 13.06-18 24.25-18s21.62 7.73 24.25 18a8 8 0 1 0 15.5-4M96 120a16 16 0 1 1 16 16a16 16 0 0 1-16-16");
}
</style><path class="ev4_m-b0l"/>`,
		"fallback": "ph:address-book-tabs",
	});
}

export default Component;
