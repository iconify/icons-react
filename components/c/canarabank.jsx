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
		"content": `<style>.nqj_edxnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.211 24.763L4.5 27.055l15.366 12.221l13.12-16.983l-8.939 1.494");
}

.p64-5pb5u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.935 31.709l-5.675-.7L30.2 8.724l13.3 25.52l-15.178-1.871");
}
</style><path class="p64-5pb5u"/><path class="nqj_edxnd"/>`,
		"fallback": "arcticons:canarabank",
	});
}

export default Component;
