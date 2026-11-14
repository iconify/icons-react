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
		"content": `<style>.ojw736box {
  d: path("M12.25 9.25H19v6h-6.75Zm0 2H19M14 8v2m3.25-2v2");
}

.tnvl6hbxj {
  d: path("M2.5 6h19v12h-19ZM6 12h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tnvl6hbxj"/><path class="ojw736box"/></g>`,
		"fallback": "uix-sharp:field-type-date",
	});
}

export default Component;
