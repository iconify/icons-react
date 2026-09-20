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
		"content": `<style>.l2x_h9bdc {
  fill: currentColor;
  d: path("M12 14.423q.262 0 .439-.177q.176-.177.176-.438t-.177-.439t-.438-.177t-.438.177t-.177.439t.177.438t.438.177m-.5-2.961h1V5.385h-1zM3 20.077V3h18v14H6.077zM5.65 16H20V4H4v13.644zM4 16V4z");
}
</style><path class="l2x_h9bdc"/>`,
		"fallback": "material-symbols-light:feedback-outline-sharp",
	});
}

export default Component;
