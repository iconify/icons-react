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
		"content": `<style>.plrd32bbb {
  fill: currentColor;
  d: path("M9.5 15H11v-2h1.5v2H14V9h-1.5v2.5H11V9H9.5zm5.5 0h3.75l.75-.75v-4.5L18.75 9H15zm1.5-1.5v-3H18v3zM4.5 15H6v-2h2v-1.5H6v-1h2.5V9h-4zM1 20V4h22v16z");
}
</style><path class="plrd32bbb"/>`,
		"fallback": "material-symbols:full-hd-sharp",
	});
}

export default Component;
