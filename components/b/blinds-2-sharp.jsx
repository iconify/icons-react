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
		"content": `<style>.tdv6pc05m {
  fill: currentColor;
  d: path("M4 22V8H2V5q0-1.25.875-2.125T5 2h14q1.25 0 2.125.875T22 5v3h-2v14zm2-2h12v-3H6zm0-5h12v-3h-2v1q0 .425-.288.713T15 14t-.712-.288T14 13v-1H6zm0-5h8V8H6zm10 0h2V8h-2z");
}
</style><path class="tdv6pc05m"/>`,
		"fallback": "material-symbols:blinds-2-sharp",
	});
}

export default Component;
