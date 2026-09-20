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
		"content": `<style>.vww-pjw7o {
  fill: currentColor;
  d: path("M3 22q-.425 0-.712-.288T2 21t.288-.712T3 20h18q.425 0 .713.288T22 21t-.288.713T21 22zm5-11q-.425 0-.712-.288T7 10V9q0-.425.288-.712T8 8h8q.425 0 .713.288T17 9v1q0 .425-.288.713T16 11zm0 6q-.425 0-.712-.288T7 16v-1q0-.425.288-.712T8 14h8q.425 0 .713.288T17 15v1q0 .425-.288.713T16 17z");
}
</style><path class="vww-pjw7o"/>`,
		"fallback": "material-symbols:align-end-outline-rounded",
	});
}

export default Component;
