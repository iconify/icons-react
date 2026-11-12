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
		"content": `<style>.gnrb8ib6h {
  stroke-linejoin: round;
  d: path("M16 12L14 10.5L16 9");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mkl-hbb0y {
  stroke-linejoin: round;
  d: path("M16 16L14.6667 15L13.3333 16L12 15L10.6667 16L9.33333 15L8 16");
}

.shu3xdl9q {
  cx: 12px;
  cy: 12px;
  r: 10px;
}

.tbl4j-bom {
  stroke-linejoin: round;
  d: path("M8 12L10 10.5L8 9");
}
</style><g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="tbl4j-bom"/><path class="gnrb8ib6h"/><path class="mkl-hbb0y"/></g>`,
		"fallback": "solar:confounded-circle-linear",
	});
}

export default Component;
