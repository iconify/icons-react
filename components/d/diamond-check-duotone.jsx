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
		"content": `<style>.dhqyuubgh {
  d: path("M8.5 12.5L10.5 14.5L14.5 10.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vamt74boj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18.1213 18.1213L14.1213 22.1213C13.5587 22.6839 12.7956 23 12 23C11.2044 23 10.4413 22.6839 9.8787 22.1213L1.8787 14.1213C1.3161 13.5587 1 12.7956 1 12C1 11.2044 1.3161 10.4413 1.8787 9.8787L9.8787 1.8787C10.4413 1.3161 11.2044 1 12 1C12.7956 1 13.5587 1.3161 14.1213 1.8787L22.1213 9.8787C22.6839 10.4413 23 11.2044 23 12C23 12.7956 22.6839 13.5587 22.1213 14.1213Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="vamt74boj"/><path class="dhqyuubgh"/></g>`,
		"fallback": "keyline-icons:diamond-check-duotone",
	});
}

export default Component;
