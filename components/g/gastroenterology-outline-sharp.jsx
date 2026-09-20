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
		"content": `<style>.hxl-s4sac {
  fill: currentColor;
  d: path("M3 22v-6q0-1.25.875-2.125T6 13h2q1.25 0 2.125-.875T11 10q0-.425-.288-.712T10 9q-.825 0-1.412-.587T8 7V2h2v5q1.25 0 2.125.875T13 10q0 2.075-1.463 3.538T8 15H6q-.425 0-.712.288T5 16v6zm6 0H7v-2q0-1.25.875-2.125T10 17h4q2.075 0 3.538-1.463T19 12v-1q0-2.075-1.463-3.537T14 6q-.825 0-1.412-.587T12 4V2h2v2q2.925 0 4.963 2.038T21 11v1q0 2.925-2.037 4.963T14 19h-4q-.425 0-.712.288T9 20zm-4 0v-6q0-.425.288-.712T6 15h2q2.075 0 3.538-1.463T13 10q0-1.25-.875-2.125T10 7V2v5q1.25 0 2.125.875T13 10q0 2.075-1.463 3.538T8 15H6q-.425 0-.712.288T5 16z");
}
</style><path class="hxl-s4sac"/>`,
		"fallback": "material-symbols:gastroenterology-outline-sharp",
	});
}

export default Component;
