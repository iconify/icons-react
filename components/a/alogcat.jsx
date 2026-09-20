import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ex36bzbri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 36.2V15.5h-9a2.006 2.006 0 0 1-2-2v-9h-18a2.006 2.006 0 0 0-2 2v5.004m0 13.391V41.5a2.006 2.006 0 0 0 2 2h27a2.034 2.034 0 0 0 2-1.7m-11-37.3l11 11m-23.533 4.708h10.992m-10.992-3.793h11.047m-11.047-3.792h9.176");
}

.hf-aztngn {
  cx: 18.6px;
  cy: 18.2px;
  r: 8.6px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l-6_p92gk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.5 11.21a12.069 12.069 0 1 0 1.916 4.287");
}

.mbeyhtbbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.704 28.004L40 42.3a1.933 1.933 0 0 0 2.733.067l.067-.067a1.933 1.933 0 0 0 .067-2.733q-.033-.035-.067-.067L28.49 25.19M15.967 24h8.974M13.149 11.548v13.347");
}
</style><path class="ex36bzbri"/><circle class="hf-aztngn"/><path class="l-6_p92gk"/><path class="mbeyhtbbv"/>`,
		"fallback": "arcticons:alogcat",
	});
}

export default Component;
