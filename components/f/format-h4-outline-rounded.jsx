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
		"content": `<style>.inx4glb6b {
  fill: currentColor;
  d: path("M3.288 16.713Q3 16.425 3 16V8q0-.425.288-.712T4 7t.713.288T5 8v3h4V8q0-.425.288-.712T10 7t.713.288T11 8v8q0 .425-.288.713T10 17t-.712-.288T9 16v-3H5v3q0 .425-.288.713T4 17t-.712-.288m15 0Q18 16.426 18 16v-2h-4q-.425 0-.712-.288T13 13V8q0-.425.288-.712T14 7t.713.288T15 8v4h3V8q0-.425.288-.712T19 7t.713.288T20 8v4h1q.425 0 .713.288T22 13t-.288.713T21 14h-1v2q0 .425-.288.713T19 17t-.712-.288");
}
</style><path class="inx4glb6b"/>`,
		"fallback": "material-symbols:format-h4-outline-rounded",
	});
}

export default Component;
