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
		"content": `<style>.ehm2l9brx {
  fill: currentColor;
  d: path("M7.5 6q-.625 0-1.062.438T6 7.5t.438 1.063T7.5 9t1.063-.437T9 7.5t-.437-1.062T7.5 6m0 10q-.625 0-1.062.438T6 17.5t.438 1.063T7.5 19t1.063-.437T9 17.5t-.437-1.062T7.5 16M4 3h16q.425 0 .713.288T21 4v7q0 .425-.288.713T20 12H4q-.425 0-.712-.288T3 11V4q0-.425.288-.712T4 3m0 10h16q.425 0 .713.288T21 14v7q0 .425-.288.713T20 22H4q-.425 0-.712-.288T3 21v-7q0-.425.288-.712T4 13");
}
</style><path class="ehm2l9brx"/>`,
		"fallback": "material-symbols:dns-rounded",
	});
}

export default Component;
