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
		"content": `<style>.rl_kkebmc {
  fill: currentColor;
  d: path("M4 22v-2h2v-3q0-1.525.713-2.863T8.7 12q-1.275-.8-1.987-2.137T6 7V4H4V2h16v2h-2v3q0 1.2-.45 2.3t-1.275 1.925q-1.175.3-2.137.938T12.475 13.7t-1.087 2T11 18q0 1.075.325 2.1t.95 1.9zm10.463-.462Q13 20.075 13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23t-3.537-1.463M17.3 20.25l3.55-3.55l-.75-.75l-2.8 2.8l-1.4-1.4l-.75.75z");
}
</style><path class="rl_kkebmc"/>`,
		"fallback": "material-symbols:hourglass-check-sharp",
	});
}

export default Component;
