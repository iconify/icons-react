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
		"content": `<style>.sit--92es {
  fill: currentColor;
  d: path("M176 76h-24a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h24a52 52 0 0 0 0-104m0 96h-20V84h20a44 44 0 0 1 0 88m-60 4v-44H52v44a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0v44h64V80a4 4 0 0 1 8 0v96a4 4 0 0 1-8 0M28 48a4 4 0 0 1 4-4h192a4 4 0 0 1 0 8H32a4 4 0 0 1-4-4m200 160a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h192a4 4 0 0 1 4 4");
}
</style><path class="sit--92es"/>`,
		"fallback": "ph:high-definition-thin",
	});
}

export default Component;
