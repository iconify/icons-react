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
		"content": `<style>.g5lhe3bci {
  fill: currentColor;
  d: path("M11.288 21.713Q11 21.425 11 21v-7.5H4q-.425 0-.712-.288T3 12.5v-1q0-.425.288-.712T4 10.5h7V3q0-.425.288-.712T12 2t.713.288T13 3v7.5h7q.425 0 .713.288T21 11.5v1q0 .425-.288.713T20 13.5h-7V21q0 .425-.288.713T12 22t-.712-.288");
}
</style><path class="g5lhe3bci"/>`,
		"fallback": "material-symbols:align-flex-center-outline-rounded",
	});
}

export default Component;
