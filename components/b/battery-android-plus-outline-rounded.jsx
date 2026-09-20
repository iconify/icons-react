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
		"content": `<style>.mh4dj_vtb {
  fill: currentColor;
  d: path("M3 16V8zm1 2q-1.25 0-2.125-.875T1 15V9q0-1.25.875-2.125T4 6h11q.425 0 .713.288T16 7t-.288.713T15 8H4q-.425 0-.712.288T3 9v6q0 .425.288.713T4 16h11q.425 0 .713.288T16 17t-.288.713T15 18zm14-5h-2q-.425 0-.712-.288T15 12t.288-.712T16 11h2V9q0-.425.288-.712T19 8t.713.288T20 9v2h2q.425 0 .713.288T23 12t-.288.713T22 13h-2v2q0 .425-.288.713T19 16t-.712-.288T18 15z");
}
</style><path class="mh4dj_vtb"/>`,
		"fallback": "material-symbols:battery-android-plus-outline-rounded",
	});
}

export default Component;
