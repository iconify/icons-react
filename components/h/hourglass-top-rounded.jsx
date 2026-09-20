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
		"content": `<style>.gim1kdrmx {
  fill: currentColor;
  d: path("M8 20h8v-3q0-1.65-1.175-2.825T12 13t-2.825 1.175T8 17zm-3 2q-.425 0-.712-.288T4 21t.288-.712T5 20h1v-3q0-1.525.713-2.863T8.7 12q-1.275-.8-1.987-2.137T6 7V4H5q-.425 0-.712-.288T4 3t.288-.712T5 2h14q.425 0 .713.288T20 3t-.288.713T19 4h-1v3q0 1.525-.712 2.863T15.3 12q1.275.8 1.988 2.138T18 17v3h1q.425 0 .713.288T20 21t-.288.713T19 22z");
}
</style><path class="gim1kdrmx"/>`,
		"fallback": "material-symbols:hourglass-top-rounded",
	});
}

export default Component;
