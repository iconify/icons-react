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
		"content": `<style>.aoo5sjb8b {
  fill: currentColor;
  d: path("M2 22v-2h4v-2H3V3h8v3H8v1h3.05v1H8v1h3.4q.35.575.888.975t1.187.6L19 12.1V18h-3v2h2q1.25 0 2.125-.875T21 17h2q0 2.075-1.463 3.538T18 22zm6-2h6v-2H8z");
}
</style><path class="aoo5sjb8b"/>`,
		"fallback": "material-symbols:ice-skating-sharp",
	});
}

export default Component;
