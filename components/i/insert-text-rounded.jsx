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
		"content": `<style>.djm618b7a {
  fill: currentColor;
  d: path("M11 10H9q-.425 0-.712-.288T8 9t.288-.712T9 8h6q.425 0 .713.288T16 9t-.288.713T15 10h-2v5q0 .425-.288.713T12 16t-.712-.288T11 15zM1 22v-4q0-.425.288-.712T2 17h1V7H2q-.425 0-.712-.288T1 6V2q0-.425.288-.712T2 1h4q.425 0 .713.288T7 2v1h10V2q0-.425.288-.712T18 1h4q.425 0 .713.288T23 2v4q0 .425-.288.713T22 7h-1v10h1q.425 0 .713.288T23 18v4q0 .425-.288.713T22 23h-4q-.425 0-.712-.288T17 22v-1H7v1q0 .425-.288.713T6 23H2q-.425 0-.712-.288T1 22m6-3h10v-1q0-.425.288-.712T18 17h1V7h-1q-.425 0-.712-.288T17 6V5H7v1q0 .425-.288.713T6 7H5v10h1q.425 0 .713.288T7 18z");
}
</style><path class="djm618b7a"/>`,
		"fallback": "material-symbols:insert-text-rounded",
	});
}

export default Component;
