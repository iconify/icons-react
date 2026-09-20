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
		"content": `<style>.kiu_v294o {
  fill: currentColor;
  d: path("M206 32a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6m-32 40v152a14 14 0 0 1-14 14H96a14 14 0 0 1-14-14V72a14 14 0 0 1 14-14h64a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H96a2 2 0 0 0-2 2v152a2 2 0 0 0 2 2h64a2 2 0 0 0 2-2Z");
}
</style><path class="kiu_v294o"/>`,
		"fallback": "ph:align-top-simple-light",
	});
}

export default Component;
