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
		"content": `<style>.bx_jrb3jp {
  fill: currentColor;
  d: path("M4 22q-.425 0-.712-.288T3 21v-5q0-1.25.875-2.125T6 13h2q1.25 0 2.125-.875T11 10q0-.425-.288-.712T10 9q-.825 0-1.412-.587T8 7V3q0-.425.288-.712T9 2h4q.425 0 .713.288T14 3v1q2.925 0 4.963 2.038T21 11v1q0 2.925-2.037 4.963T14 19h-4q-.425 0-.712.288T9 20v1q0 .425-.288.713T8 22z");
}
</style><path class="bx_jrb3jp"/>`,
		"fallback": "material-symbols:gastroenterology-rounded",
	});
}

export default Component;
