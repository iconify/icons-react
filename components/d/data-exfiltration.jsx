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
		"content": `<style>.a5emuwbmb {
  d: path("M4 5.5C4 7 7.6 8.25 12 8.25S20 7 20 5.5M4 12c0 1.5 3.6 2.75 8 2.75q.885 0 1.716-.065");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mpw1z0p0z {
  d: path("M12.251 21.249L12 21.25c-4.4 0-8-1.25-8-2.75v-13C4 4 7.6 2.75 12 2.75S20 4 20 5.5v6.655");
}

.vw4q_gb0s {
  d: path("M4 5.5C4 7 7.6 8.25 12 8.25S20 7 20 5.5M4 12c0 1.2 2.3 2.2 5.5 2.5M15 21l6-6m-4.5 0H21v4.5");
}
</style><g class="hntgybcog"><path class="mpw1z0p0z"/><path class="a5emuwbmb"/><path class="vw4q_gb0s"/></g>`,
		"fallback": "uix:data-exfiltration",
	});
}

export default Component;
