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
		"content": `<style>.wzt1_3xmx {
  fill: currentColor;
  d: path("M3 19v-4.192q.883-.327 1.441-1.088Q5 12.96 5 12t-.559-1.72T3 9.192V5h18v14zm1-1h16V6H4v2.55q.925.55 1.463 1.463T6 12t-.537 1.988T4 15.45zm4.927-2.58l8.708-2.312q.336-.081.533-.367q.198-.285.117-.603q-.081-.317-.38-.447q-.3-.13-.616-.049l-2.527.689l-4-3.75l-1.054.234l2.4 4.2l-2.746.677l-1.25-.95l-.604.173zM12 12");
}
</style><path class="wzt1_3xmx"/>`,
		"fallback": "material-symbols-light:airplane-ticket-outline-sharp",
	});
}

export default Component;
