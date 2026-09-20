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
		"content": `<style>.fyg68d4mq {
  fill: currentColor;
  d: path("M8 20h8v-3q0-1.65-1.175-2.825T12 13t-2.825 1.175T8 17zm6.825-10.175Q16 8.65 16 7V4H8v3q0 1.65 1.175 2.825T12 11t2.825-1.175M4 22v-2h2v-3q0-1.525.713-2.863T8.7 12q-1.275-.8-1.987-2.137T6 7V4H4V2h16v2h-2v3q0 1.525-.712 2.863T15.3 12q1.275.8 1.988 2.138T18 17v3h2v2z");
}
</style><path class="fyg68d4mq"/>`,
		"fallback": "material-symbols:hourglass-empty-outline",
	});
}

export default Component;
