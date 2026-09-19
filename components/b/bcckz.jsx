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
		"content": `<style>.g1tvmbbqo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.995 16.022l-7.467 12.932c-1.163 2.016.291 4.536 2.62 4.536H33.08c2.327 0 3.782-2.52 2.618-4.536l-7.466-12.932c-1.164-2.016-4.074-2.016-5.238 0");
}

.mpsijiukt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.384 9.937L6.222 32.733c-2.051 3.554.513 7.996 4.616 7.996h26.324c4.103 0 6.668-4.442 4.616-7.996L28.616 9.937c-2.051-3.554-7.18-3.554-9.232 0");
}
</style><path class="mpsijiukt"/><path class="g1tvmbbqo"/>`,
		"fallback": "arcticons:bcckz",
	});
}

export default Component;
