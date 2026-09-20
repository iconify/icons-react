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
		"content": `<style>.yt_m5s8ho {
  fill: currentColor;
  d: path("M3 17V4h18v2h-9v11zm11 3V8h8v12zM2 20v-2h10v2zm16-7.5q.325 0 .538-.225t.212-.525q0-.325-.213-.537T18 11q-.3 0-.525.213t-.225.537q0 .3.225.525T18 12.5");
}
</style><path class="yt_m5s8ho"/>`,
		"fallback": "material-symbols:devices-sharp",
	});
}

export default Component;
