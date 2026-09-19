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
		"content": `<style>.mvi1f4j2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.817 38.592V5.507h10.789a76 76 0 0 1 9.284.448c4.625.548 14.293 5.45 14.293 18.038a17.66 17.66 0 0 1-14.293 17.94a66 66 0 0 1-9.34.563l-10.733-.074L17.55 31.689v1.071h5.126c4.214 0 6.995-3.217 7.103-8.767s-2.889-8.846-6.478-8.846H17.55V28.14ZM18.494 15l8.833-8.833m2.556 16.383l8.547-8.547M10.323 42.299l9.39-9.391");
}
</style><path class="mvi1f4j2k"/>`,
		"fallback": "arcticons:dcu",
	});
}

export default Component;
