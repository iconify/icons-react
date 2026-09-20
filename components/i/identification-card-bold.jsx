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
		"content": `<style>.nqko3nb7p {
  fill: currentColor;
  d: path("M148 108a12 12 0 0 1 12-12h28a12 12 0 0 1 0 24h-28a12 12 0 0 1-12-12m40 28h-20a12 12 0 0 0 0 24h20a12 12 0 0 0 0-24m48-80v144a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v136h168ZM58.28 159.37A43.8 43.8 0 0 1 71.53 142a36 36 0 1 1 56.94 0a43.84 43.84 0 0 1 13.26 17.37a12 12 0 0 1-22.15 9.26C116.48 161.19 108.42 156 100 156s-16.47 5.2-19.59 12.63a12 12 0 1 1-22.13-9.26M88 120a12 12 0 1 0 12-12a12 12 0 0 0-12 12");
}
</style><path class="nqko3nb7p"/>`,
		"fallback": "ph:identification-card-bold",
	});
}

export default Component;
