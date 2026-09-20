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
		"content": `<style>.wjkpu7b2q {
  fill: currentColor;
  d: path("M248 122h-10V88a14 14 0 0 0-14-14h-18V64a14 14 0 0 0-14-14h-24a14 14 0 0 0-14 14v58h-52V64a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v10H32a14 14 0 0 0-14 14v34H8a6 6 0 0 0 0 12h10v34a14 14 0 0 0 14 14h18v10a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-58h52v58a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-10h18a14 14 0 0 0 14-14v-34h10a6 6 0 0 0 0-12M32 170a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h18v84Zm58 22a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2Zm104 0a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2Zm32-24a2 2 0 0 1-2 2h-18V86h18a2 2 0 0 1 2 2Z");
}
</style><path class="wjkpu7b2q"/>`,
		"fallback": "ph:barbell-light",
	});
}

export default Component;
