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
		"content": `<style>.ovssapbam {
  d: path("M6.5 7.5v-1a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2h-2M6 11h8m-8 3h8m-8 3h5");
}

.pmae9eqmt {
  d: path("M2.5 7.5h15V20h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pmae9eqmt"/><path class="ovssapbam"/></g>`,
		"fallback": "uix-sharp:cue-cards",
	});
}

export default Component;
