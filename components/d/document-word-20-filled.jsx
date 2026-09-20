import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.anj69-byv {
  fill: currentColor;
  d: path("M8 9a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm2-2.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5h-4.269A2.98 2.98 0 0 0 11 16v-5a3 3 0 0 0-3-3H4V3.5A1.5 1.5 0 0 1 5.5 2H10zm-2.577 4.501L6.8 14.3L6.136 11H4.834L4.2 14.3L3.562 11H2.5l1.035 5h1.299l.666-3l.636 3l1.287-.001L8.5 11zM15.75 7H11.5a.5.5 0 0 1-.5-.5V2.25z");
}
</style><path class="anj69-byv"/>`,
		"fallback": "fluent:document-word-20-filled",
	});
}

export default Component;
