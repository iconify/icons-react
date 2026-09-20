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
		"content": `<style>.zz9z94z6k {
  fill: currentColor;
  d: path("M7 22q-.825 0-1.412-.587T5 20V4q0-.825.588-1.412T7 2h6.175q.4 0 .763.15t.637.425l3.85 3.85q.275.275.425.638t.15.762V20q0 .825-.587 1.413T17 22zm4-18H7v16h10V10h-3q-1.25 0-2.125-.875T11 7zm2 0v3q0 .425.288.713T14 8h3v-.175L13.175 4zm-3 15q-.425 0-.712-.288T9 18t.288-.712T10 17h2q.425 0 .713.288T13 18t-.288.713T12 19zm0-4q-.425 0-.712-.288T9 14t.288-.712T10 13h4q.425 0 .713.288T15 14t-.288.713T14 15z");
}
</style><path class="zz9z94z6k"/>`,
		"fallback": "material-symbols:docs-outline",
	});
}

export default Component;
