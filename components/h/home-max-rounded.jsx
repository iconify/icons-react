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
		"content": `<style>.t-pv-3bdq {
  fill: currentColor;
  d: path("M7 19H5q-1.65 0-2.825-1.175T1 15V9q0-1.65 1.175-2.825T5 5h14q1.65 0 2.825 1.175T23 9v6q0 1.65-1.175 2.825T19 19h-2q0 .425-.288.713T16 20H8q-.425 0-.712-.288T7 19");
}
</style><path class="t-pv-3bdq"/>`,
		"fallback": "material-symbols:home-max-rounded",
	});
}

export default Component;
