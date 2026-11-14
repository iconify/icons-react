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
		"content": `<style>.iomcfzbjy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 20.5C12 14 12.5 8 15 3m-3 17.5Q10.5 10.75 4.5 7M12 20.5c1-5 4-8.5 8-10m-14 10h12");
}
</style><path class="iomcfzbjy"/>`,
		"fallback": "uix-sharp:grass-tuft",
	});
}

export default Component;
