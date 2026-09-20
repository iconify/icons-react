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
		"content": `<style>.hngdhbb9y {
  fill: currentColor;
  d: path("M13.75 19q-.425 0-.712-.288T12.75 18V6q0-.425.288-.712T13.75 5h1.375q.425 0 .713.288t.287.712v12q0 .425-.288.713t-.712.287zm-4.875 0q-.425 0-.712-.288T7.874 18V6q0-.425.288-.712T8.875 5h1.375q.425 0 .713.288T11.25 6v12q0 .425-.288.713T10.25 19zM4 19q-.425 0-.712-.288T3 18V6q0-.425.288-.712T4 5h1.375q.425 0 .713.288T6.375 6v12q0 .425-.288.713T5.376 19zm14.625 0q-.425 0-.712-.288T17.625 18V6q0-.425.288-.712T18.625 5H20q.425 0 .713.288T21 6v12q0 .425-.288.713T20 19z");
}
</style><path class="hngdhbb9y"/>`,
		"fallback": "material-symbols:calendar-view-week-rounded",
	});
}

export default Component;
