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
		"content": `<style>.d68_uj22w {
  fill: currentColor;
  d: path("M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM166 96v48a6 6 0 0 1-12 0v-33.52l-53.76 53.76a6 6 0 0 1-8.48-8.48L145.52 102H112a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6");
}
</style><path class="d68_uj22w"/>`,
		"fallback": "ph:arrow-square-up-right-light",
	});
}

export default Component;
