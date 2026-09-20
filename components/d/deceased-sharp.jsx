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
		"content": `<style>.y-j9v_b3e {
  fill: currentColor;
  d: path("M11 22q-2.5 0-4.25-1.75T5 16v-2q1.775-.025 3.35.725T11 16.75v-3.825q-2.15-.35-3.575-2.013T6 7V1.425L9.5 4.45L12 1.425l2.5 3.025L18 1.425V7q0 2.25-1.425 3.913T13 12.925v3.825q1.075-1.275 2.65-2.025T19 14v2q0 2.5-1.75 4.25T13 22z");
}
</style><path class="y-j9v_b3e"/>`,
		"fallback": "material-symbols:deceased-sharp",
	});
}

export default Component;
