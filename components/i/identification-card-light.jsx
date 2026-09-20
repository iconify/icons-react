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
		"content": `<style>.l5w0rw9_z {
  fill: currentColor;
  d: path("M198 112a6 6 0 0 1-6 6h-40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m-6 26h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12m38-82v144a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v144a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Zm-84.19 110.51a6 6 0 0 1-11.62 3C119.34 158.38 108.08 150 96 150s-23.33 8.38-26.19 19.5a6 6 0 0 1-11.62-3A38 38 0 0 1 76.78 143a30 30 0 1 1 38.45 0a38 38 0 0 1 18.58 23.51M96 138a18 18 0 1 0-18-18a18 18 0 0 0 18 18");
}
</style><path class="l5w0rw9_z"/>`,
		"fallback": "ph:identification-card-light",
	});
}

export default Component;
