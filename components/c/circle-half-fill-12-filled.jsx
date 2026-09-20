import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.azc888bir {
  fill: currentColor;
  d: path("M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6m1.5 0h7a3.5 3.5 0 1 0-7 0");
}
</style><path class="azc888bir"/>`,
		"fallback": "fluent:circle-half-fill-12-filled",
	});
}

export default Component;
