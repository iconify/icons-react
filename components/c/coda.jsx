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
		"content": `<style>.ai52bibfq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 31.905V38.5a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4h29a4 4 0 0 1 4 4v6.595c0 .629.042 1.788-1.427 1.788c-.582-.003-1.077-.483-2.079-1.146c-5.106-3.38-12.74-.015-12.74 7.263s7.634 10.642 12.74 7.263c1.002-.663 1.497-1.142 2.08-1.145c1.188 0 1.426 1.179 1.426 1.787");
}
</style><path class="ai52bibfq"/>`,
		"fallback": "arcticons:coda",
	});
}

export default Component;
