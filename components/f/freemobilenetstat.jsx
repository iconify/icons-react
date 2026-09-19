import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b1lcxqbqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.42 35.89a16.81 16.81 0 0 1 23.77-23.78L21.31 24l11.88 11.89a16.82 16.82 0 0 1-23.77 0m29.15 0L26.69 24l11.88-11.89a16.8 16.8 0 0 1 0 23.78m0 0");
}
</style><path class="b1lcxqbqr"/>`,
		"fallback": "arcticons:freemobilenetstat",
	});
}

export default Component;
