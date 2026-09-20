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
		"content": `<style>.kwa_vynzj {
  fill: currentColor;
  d: path("M7 21v-1H3v-2h1V6H3V4h3.325L7 2h10l.675 2H21v2h-1v12h1v2h-4v1zm-1-3h12v-5H6zm7.063-1.437q.437-.438.437-1.063t-.437-1.062T12 14t-1.062.438T10.5 15.5t.438 1.063T12 17t1.063-.437M6 11h3V7.5q0-.625-.437-1.062T7.5 6t-1.062.438T6 7.5zm4.5 0h3V7.5q0-.625-.437-1.062T12 6t-1.062.438T10.5 7.5zm4.5 0h3V7.5q0-.625-.437-1.062T16.5 6t-1.062.438T15 7.5zm-9 2h12z");
}
</style><path class="kwa_vynzj"/>`,
		"fallback": "material-symbols:cable-car-outline",
	});
}

export default Component;
