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
		"content": `<style>.jz5bm6ixm {
  d: path("m8 18l2.5-3.75H14L16 18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vn-ipvbyv {
  d: path("M2.5 2.5v19m19-19v19M8 11V3M5.75 5.25L8 3l2.25 2.25M16 3v8m-2.25-2.25L16 11l2.25-2.25M5.5 18a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><g class="ulnmmdpxh"><path class="vn-ipvbyv"/><path class="jz5bm6ixm"/></g>`,
		"fallback": "uix-sharp:contraflow-cycle-lane",
	});
}

export default Component;
