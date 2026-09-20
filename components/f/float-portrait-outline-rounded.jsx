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
		"content": `<style>.ltzfskl0v {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v8q0 .425-.288.713T19 13q-.425 0-.713-.288T18 12V4H6v16h6q.425 0 .713.288T13 21q0 .425-.288.713T12 22H6Zm10 0q-.425 0-.713-.288T15 21v-5q0-.425.288-.713T16 15h3q.425 0 .713.288T20 16v5q0 .425-.288.713T19 22h-3Zm-3-2H6V4h12v9h-3q-.825 0-1.413.588T13 15v5Z");
}
</style><path class="ltzfskl0v"/>`,
		"fallback": "material-symbols:float-portrait-outline-rounded",
	});
}

export default Component;
