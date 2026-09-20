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
		"content": `<style>.fmbu7mbci {
  fill: currentColor;
  d: path("M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 52h176a4 4 0 0 1 4 4v36H36V56a4 4 0 0 1 4-4m176 152H40a4 4 0 0 1-4-4V100h184v100a4 4 0 0 1-4 4");
}
</style><path class="fmbu7mbci"/>`,
		"fallback": "ph:browser-thin",
	});
}

export default Component;
