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
		"content": `<style>.emllcpujr {
  fill: currentColor;
  d: path("M4 20q-.425 0-.712-.288T3 19t.288-.712T4 18V6q-.425 0-.712-.288T3 5t.288-.712T4 4h2.325l.45-1.325q.1-.3.363-.488T7.725 2h8.55q.325 0 .588.188t.362.487L17.675 4H20q.425 0 .713.288T21 5t-.288.713T20 6v12q.425 0 .713.288T21 19t-.288.713T20 20h-3q0 .425-.288.713T16 21H8q-.425 0-.712-.288T7 20zm2-9h3V7.5q0-.625-.437-1.062T7.5 6t-1.062.438T6 7.5zm4.5 0h3V7.5q0-.625-.437-1.062T12 6t-1.062.438T10.5 7.5zm4.5 0h3V7.5q0-.625-.437-1.062T16.5 6t-1.062.438T15 7.5zm-1.937 5.563q.437-.438.437-1.063t-.437-1.062T12 14t-1.062.438T10.5 15.5t.438 1.063T12 17t1.063-.437");
}
</style><path class="emllcpujr"/>`,
		"fallback": "material-symbols:cable-car-rounded",
	});
}

export default Component;
