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
		"content": `<style>.fhmi20_pk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.088 6.925H42.5v34.149H31.088l.01-1.765a17.4 17.4 0 0 1-8.22 2.068C13.28 41.377 5.5 33.597 5.5 24S13.28 6.623 22.877 6.623c2.866 0 5.687.709 8.212 2.063z");
}

.l68dll0mh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.969 32.358A8.358 8.358 0 1 1 31.09 18.31l.008 11.371a8.36 8.36 0 0 1-6.13 2.677");
}
</style><path class="l68dll0mh"/><path class="fhmi20_pk"/>`,
		"fallback": "arcticons:arabam",
	});
}

export default Component;
