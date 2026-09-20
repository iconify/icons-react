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
		"content": `<style>.l4o0h_nqr {
  fill: currentColor;
  d: path("M3 13q-.425 0-.712-.288T2 12t.288-.712T3 11h18q.425 0 .713.288T22 12t-.288.713T21 13zm5-3q-.425 0-.712-.288T7 9V8q0-.425.288-.712T8 7h8q.425 0 .713.288T17 8v1q0 .425-.288.713T16 10zm0 7q-.425 0-.712-.288T7 16v-1q0-.425.288-.712T8 14h8q.425 0 .713.288T17 15v1q0 .425-.288.713T16 17z");
}
</style><path class="l4o0h_nqr"/>`,
		"fallback": "material-symbols:align-center-outline-rounded",
	});
}

export default Component;
