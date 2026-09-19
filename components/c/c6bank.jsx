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
		"content": `<style>.c2xrbabwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z");
}

.f1hqm04ka {
  cx: 31.153px;
  cy: 26.7px;
  r: 5.3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mbdj46rha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.984 17.951C35.101 16.795 33.755 16 31.524 16h-.371a5.3 5.3 0 0 0-5.3 5.3v5.4");
}

.qpysxwb4r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.147 26.635v.065a5.3 5.3 0 0 1-5.3 5.3h0a5.3 5.3 0 0 1-5.3-5.3v-5.4a5.3 5.3 0 0 1 5.3-5.3h0a5.3 5.3 0 0 1 5.3 5.3v.065");
}
</style><path class="c2xrbabwq"/><path class="qpysxwb4r"/><circle class="f1hqm04ka"/><path class="mbdj46rha"/>`,
		"fallback": "arcticons:c6bank",
	});
}

export default Component;
