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
		"content": `<style>.bas8qqbmt {
  fill: currentColor;
  d: path("M6 22q-1.25 0-2.125-.875T3 19v-1q0-.825.588-1.412T5 16h1V4q0-.825.588-1.412T8 2h11q.825 0 1.413.588T21 4v15q0 1.25-.875 2.125T18 22zm12-2q.425 0 .713-.288T19 19V4H8v12h7q.825 0 1.413.588T17 18v1q0 .425.288.713T18 20M10 9q-.425 0-.712-.288T9 8t.288-.712T10 7h7q.425 0 .713.288T18 8t-.288.713T17 9zm0 3q-.425 0-.712-.288T9 11t.288-.712T10 10h7q.425 0 .713.288T18 11t-.288.713T17 12z");
}
</style><path class="bas8qqbmt"/>`,
		"fallback": "material-symbols:contract-rounded",
	});
}

export default Component;
