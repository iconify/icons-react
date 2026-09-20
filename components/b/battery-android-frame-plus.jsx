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
		"content": `<style>.si7_ltset {
  fill: currentColor;
  d: path("M4 18q-1.275 0-2.137-.862T1 15V9q0-1.25.863-2.125T4 6h12v2H4q-.425 0-.712.288T3 9v6q0 .425.288.713T4 16h12v2zm14-2v-3h-3v-2h3V8h2v3h3v2h-3v3zM4 15V9h9v6z");
}
</style><path class="si7_ltset"/>`,
		"fallback": "material-symbols:battery-android-frame-plus",
	});
}

export default Component;
