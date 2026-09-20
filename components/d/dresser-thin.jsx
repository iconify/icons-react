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
		"content": `<style>.z9jpp2b1i {
  fill: currentColor;
  d: path("M140 192a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4M120 68h16a4 4 0 0 0 0-8h-16a4 4 0 0 0 0 8m16 56h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m76-84v176a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12M52 156h152v-56H52Zm0-116v52h152V40a4 4 0 0 0-4-4H56a4 4 0 0 0-4 4m152 176v-52H52v52a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4");
}
</style><path class="z9jpp2b1i"/>`,
		"fallback": "ph:dresser-thin",
	});
}

export default Component;
