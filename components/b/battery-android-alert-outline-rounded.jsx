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
		"content": `<style>.fi66t9dgp {
  fill: currentColor;
  d: path("M20.288 16.213Q20 15.925 20 15.5t.288-.712T21 14.5t.713.288t.287.712t-.288.713T21 16.5t-.712-.288m0-3.5Q20 12.425 20 12V8q0-.425.288-.712T21 7t.713.288T22 8v4q0 .425-.288.713T21 13t-.712-.288M4 18q-1.25 0-2.125-.875T1 15V9q0-1.25.875-2.125T4 6h13q.425 0 .713.288T18 7t-.288.713T17 8H4q-.425 0-.712.288T3 9v6q0 .425.288.713T4 16h13q.425 0 .713.288T18 17t-.288.713T17 18zm-1-2V8z");
}
</style><path class="fi66t9dgp"/>`,
		"fallback": "material-symbols:battery-android-alert-outline-rounded",
	});
}

export default Component;
