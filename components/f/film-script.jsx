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
		"content": `<style>.mq5rujfwz {
  fill: currentColor;
  d: path("M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H56V40h144zM96 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 104a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0-52a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="mq5rujfwz"/>`,
		"fallback": "ph:film-script",
	});
}

export default Component;
