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
		"content": `<style>.l89oeq4-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.15 21.5H3.25v-19h12v9.2m-6-9.2v19M6.5 10v3.5M12 10v3.5m6 1V18m0 3h.01");
}
</style><path class="l89oeq4-g"/>`,
		"fallback": "uix-sharp:acid-cabinet",
	});
}

export default Component;
