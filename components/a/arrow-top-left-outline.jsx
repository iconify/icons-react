import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z3whdubey {
  fill: currentColor;
  d: path("M17 19V9.5H6.921l3.793 3.792l-.708.714L5 9l5-5l.714.714L6.92 8.5H18V19z");
}
</style><path class="z3whdubey"/>`,
		"fallback": "material-symbols-light:arrow-top-left-outline",
	});
}

export default Component;
