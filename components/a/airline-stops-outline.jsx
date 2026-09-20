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
		"content": `<style>.kmb_-oz8y {
  fill: currentColor;
  d: path("M9 19v-2h2q-.375-3.45-2.95-5.725T2 9V7q3.225 0 5.925 1.7T12 13.3q.95-2.025 2.5-3.588T17.975 7H14V5h7v7h-2V8.7q-2.325 1.425-4 3.525T13 17h2v2z");
}
</style><path class="kmb_-oz8y"/>`,
		"fallback": "material-symbols:airline-stops-outline",
	});
}

export default Component;
