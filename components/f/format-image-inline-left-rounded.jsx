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
		"content": `<style>.oqykl1bnv {
  fill: currentColor;
  d: path("M3 16V8q0-.425.288-.712T4 7h8q.425 0 .713.288T13 8v8q0 .425-.288.713T12 17H4q-.425 0-.712-.288T3 16m13 1q-.425 0-.712-.288T15 16t.288-.712T16 15h4q.425 0 .713.288T21 16t-.288.713T20 17zM4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21zM4 5q-.425 0-.712-.288T3 4t.288-.712T4 3h16q.425 0 .713.288T21 4t-.288.713T20 5z");
}
</style><path class="oqykl1bnv"/>`,
		"fallback": "material-symbols:format-image-inline-left-rounded",
	});
}

export default Component;
