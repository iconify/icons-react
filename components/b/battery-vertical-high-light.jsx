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
		"content": `<style>.cf219k9bq {
  fill: currentColor;
  d: path("M90 8a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m108 48v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Zm-26 58H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 40H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 40H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12");
}
</style><path class="cf219k9bq"/>`,
		"fallback": "ph:battery-vertical-high-light",
	});
}

export default Component;
