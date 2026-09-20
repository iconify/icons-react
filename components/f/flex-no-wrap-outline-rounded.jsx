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
		"content": `<style>.e3vskx0nh {
  fill: currentColor;
  d: path("M1 16V8q0-.425.288-.712T2 7h4q.425 0 .713.288T7 8v8q0 .425-.288.713T6 17H2q-.425 0-.712-.288T1 16m8 0V8q0-.425.288-.712T10 7h4q.425 0 .713.288T15 8v8q0 .425-.288.713T14 17h-4q-.425 0-.712-.288T9 16m8 0V8q0-.425.288-.712T18 7h4q.425 0 .713.288T23 8v8q0 .425-.288.713T22 17h-4q-.425 0-.712-.288T17 16M3 15h2V9H3zm16 0h2V9h-2z");
}
</style><path class="e3vskx0nh"/>`,
		"fallback": "material-symbols:flex-no-wrap-outline-rounded",
	});
}

export default Component;
