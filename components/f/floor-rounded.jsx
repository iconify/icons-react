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
		"content": `<style>.pp-5g7bjr {
  fill: currentColor;
  d: path("M6.5 20v-3.5q0-.425.288-.712T7.5 15.5H11V12q0-.425.288-.712T12 11h3.5V7.5q0-.425.288-.712T16.5 6.5H20V4q0-.425.288-.712T21 3t.713.288T22 4v3.5q0 .425-.288.713T21 8.5h-3.5V12q0 .425-.288.713T16.5 13H13v3.5q0 .425-.288.713T12 17.5H8.5V21q0 .425-.288.713T7.5 22H4q-.425 0-.712-.288T3 21t.288-.712T4 20z");
}
</style><path class="pp-5g7bjr"/>`,
		"fallback": "material-symbols:floor-rounded",
	});
}

export default Component;
