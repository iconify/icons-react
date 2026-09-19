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
		"content": `<style>.mv2_q_btz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.482 4.5v11.592m-5.936-7.847v31.51M8.61 11.989v23.943m5.936-9.948l11.872-6.854V4.5m1.1 39V31.908m5.936 7.847V8.245m5.936 27.766V12.068m-5.936 9.948L21.582 28.87V43.5");
}
</style><path class="mv2_q_btz"/>`,
		"fallback": "arcticons:huntington",
	});
}

export default Component;
