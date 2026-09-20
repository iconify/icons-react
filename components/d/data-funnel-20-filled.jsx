import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hjjba9bfz {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2m2 6a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2m4 4a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4z");
}
</style><path class="hjjba9bfz"/>`,
		"fallback": "fluent:data-funnel-20-filled",
	});
}

export default Component;
