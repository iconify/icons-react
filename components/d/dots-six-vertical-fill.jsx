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
		"content": `<style>.offfy4bfy {
  fill: currentColor;
  d: path("M192 16H64a16 16 0 0 0-16 16v192a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16m-92 184a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56 120a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="offfy4bfy"/>`,
		"fallback": "ph:dots-six-vertical-fill",
	});
}

export default Component;
