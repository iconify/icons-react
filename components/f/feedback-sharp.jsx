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
		"content": `<style>.kz9tx5ykc {
  fill: currentColor;
  d: path("M3 20.077V3h18v14H6.077zm9-5.654q.262 0 .439-.177q.176-.177.176-.438t-.177-.439t-.438-.177t-.438.177t-.177.439t.177.438t.438.177m-.5-2.961h1V5.385h-1z");
}
</style><path class="kz9tx5ykc"/>`,
		"fallback": "material-symbols-light:feedback-sharp",
	});
}

export default Component;
