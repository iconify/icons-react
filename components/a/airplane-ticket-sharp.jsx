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
		"content": `<style>.p57oy4cdw {
  fill: currentColor;
  d: path("M3 19v-4.192q.883-.327 1.441-1.088Q5 12.96 5 12t-.559-1.72T3 9.192V5h18v14zm5.927-3.58l8.708-2.312q.336-.081.533-.367q.198-.285.117-.603q-.081-.317-.38-.447q-.3-.13-.616-.049l-2.527.689l-4-3.75l-1.054.234l2.4 4.2l-2.746.677l-1.25-.95l-.604.173z");
}
</style><path class="p57oy4cdw"/>`,
		"fallback": "material-symbols-light:airplane-ticket-sharp",
	});
}

export default Component;
