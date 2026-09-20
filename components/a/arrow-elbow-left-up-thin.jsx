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
		"content": `<style>.x1mqhsdjk {
  fill: currentColor;
  d: path("M236 192a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4V57.66L42.83 98.83a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1-5.66 5.66L92 57.66V188h140a4 4 0 0 1 4 4");
}
</style><path class="x1mqhsdjk"/>`,
		"fallback": "ph:arrow-elbow-left-up-thin",
	});
}

export default Component;
