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
		"content": `<style>.g29hgb4cg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.35 12.85c0 5.716-4.634 10.35-10.35 10.35s-10.35-4.634-10.35-10.35S18.284 2.5 24 2.5s10.35 4.634 10.35 10.35m5.519 5.519c0 8.764-7.106 15.869-15.87 15.869c-8.764-.001-15.868-7.106-15.868-15.87C8.132 9.604 15.236 2.501 24 2.5s15.868 7.105 15.869 15.869m5.63 5.63c0 11.874-9.625 21.5-21.499 21.501c-11.874 0-21.5-9.626-21.5-21.5S12.126 2.5 24 2.5S45.5 12.126 45.5 24");
}
</style><path class="g29hgb4cg"/>`,
		"fallback": "arcticons:geph",
	});
}

export default Component;
