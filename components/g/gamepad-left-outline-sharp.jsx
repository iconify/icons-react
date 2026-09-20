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
		"content": `<style>.omi9ezfgb {
  fill: currentColor;
  d: path("m12 10.5l-3-3V2h6v5.5zm4.5 4.5l-3-3l3-3H22v6zM2 15V9h5.5l3 3l-3 3zm7 7v-5.5l3-3l3 3V22zm3-14.35l1-1V4h-2v2.65zM11 20h2v-2.65l-1-1l-1 1zm6.35-7H20v-2h-2.65l-1 1z");
}
</style><path class="omi9ezfgb"/>`,
		"fallback": "material-symbols:gamepad-left-outline-sharp",
	});
}

export default Component;
