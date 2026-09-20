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
		"content": `<style>.fvgr2xi3f {
  fill: currentColor;
  d: path("M222 40a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-16 40v96a14 14 0 0 1-14 14h-40a14 14 0 0 1-14-14V80a14 14 0 0 1 14-14h40a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2h-40a2 2 0 0 0-2 2v96a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2Zm-76 0v136a14 14 0 0 1-14 14H64a14 14 0 0 1-14-14V80a14 14 0 0 1 14-14h40a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2v136a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2Z");
}
</style><path class="fvgr2xi3f"/>`,
		"fallback": "ph:align-top-light",
	});
}

export default Component;
