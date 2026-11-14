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
		"content": `<style>.cm2ow8cxc {
  d: path("M13 2.5C13 7.25 3 7.25 3 12c0 4.302 8.201 4.708 9.75 8.274M3 12h10m2.5 9.5v-3m3 3v-5m3 5v-7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oidxa-2ga {
  d: path("M3 2.5C3 7.25 13 7.25 13 12S3 16.75 3 21.5");
}
</style><g class="hntgybcog"><path class="oidxa-2ga"/><path class="cm2ow8cxc"/></g>`,
		"fallback": "uix:dna-chart",
	});
}

export default Component;
