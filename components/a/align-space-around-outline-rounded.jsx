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
		"content": `<style>.qejs3ub6k {
  fill: currentColor;
  d: path("M8 18q-.425 0-.712-.288T7 17v-1q0-.425.288-.712T8 15h8q.425 0 .713.288T17 16v1q0 .425-.288.713T16 18zm0-9q-.425 0-.712-.288T7 8V7q0-.425.288-.712T8 6h8q.425 0 .713.288T17 7v1q0 .425-.288.713T16 9zM3 22q-.425 0-.712-.288T2 21t.288-.712T3 20h18q.425 0 .713.288T22 21t-.288.713T21 22zM3 4q-.425 0-.712-.288T2 3t.288-.712T3 2h18q.425 0 .713.288T22 3t-.288.713T21 4z");
}
</style><path class="qejs3ub6k"/>`,
		"fallback": "material-symbols:align-space-around-outline-rounded",
	});
}

export default Component;
