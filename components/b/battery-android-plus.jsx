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
		"content": `<style>.tg_7gubdy {
  fill: currentColor;
  d: path("M4 18q-1.25 0-2.125-.875T1 15V9q0-1.25.875-2.125T4 6h12v3h-3v6h3v3zm14-2v-3h-3v-2h3V8h2v3h3v2h-3v3z");
}
</style><path class="tg_7gubdy"/>`,
		"fallback": "material-symbols:battery-android-plus",
	});
}

export default Component;
