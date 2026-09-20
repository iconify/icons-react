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
		"content": `<style>.n0p642isy {
  fill: currentColor;
  d: path("M5 21q-.425 0-.712-.288T4 20V10q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 3.5t.625.1t.575.3l6 4.5q.375.275.588.7T20 10v10q0 .425-.288.713T19 21h-1q-.425 0-.712-.288T17 20v-8q0-.425-.288-.712T16 11H8q-.425 0-.712.288T7 12v8q0 .425-.288.713T6 21zm5-2q-.425 0-.712-.288T9 18t.288-.712T10 17h4q.425 0 .713.288T15 18t-.288.713T14 19zm0-4q-.425 0-.712-.288T9 14t.288-.712T10 13h4q.425 0 .713.288T15 14t-.288.713T14 15z");
}
</style><path class="n0p642isy"/>`,
		"fallback": "material-symbols:garage-home-rounded",
	});
}

export default Component;
