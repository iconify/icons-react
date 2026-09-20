import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lrf8mlbsa {
  fill: currentColor;
  d: path("M198 80v32a6 6 0 0 1-12 0V86h-26a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6M96 170H70v-26a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6h32a6 6 0 0 0 0-12M230 56v144a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v144a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Z");
}
</style><path class="lrf8mlbsa"/>`,
		"fallback": "ph:frame-corners-light",
	});
}

export default Component;
