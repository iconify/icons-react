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
		"content": `<style>.cvoep2bmy {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.duiayac1k {
  fill: currentColor;
  d: path("M13 14.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.j835zw5-z {
  d: path("M3 9h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uxng__c7k {
  d: path("M13 14.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.v79f74c6p {
  fill: currentColor;
  d: path("M6 14.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x-lsfmm-w {
  d: path("M6 14.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zrwkhybyf {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="cvoep2bmy"/><path class="v79f74c6p"/><path class="duiayac1k"/><path class="zrwkhybyf"/><path class="j835zw5-z"/><path class="x-lsfmm-w"/><path class="uxng__c7k"/></g>`,
		"fallback": "iconmind:daily-active-duotone-regular",
	});
}

export default Component;
