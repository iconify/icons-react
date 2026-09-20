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
		"content": `<style>.yxwru6blc {
  fill: currentColor;
  d: path("M166 72a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m46-58v176a14 14 0 0 1-14 14H64a14 14 0 0 1-14-14V40a14 14 0 0 1 14-14h128a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2v176a2 2 0 0 0 2 2h128a2 2 0 0 0 2-2Zm-66 130a10 10 0 1 0 10 10a10 10 0 0 0-10-10");
}
</style><path class="yxwru6blc"/>`,
		"fallback": "ph:computer-tower-light",
	});
}

export default Component;
