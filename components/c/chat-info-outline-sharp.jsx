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
		"content": `<style>.zh39mxbuc {
  fill: currentColor;
  d: path("M12 6.616q.262 0 .439-.177T12.615 6t-.177-.438T12 5.385t-.438.177t-.177.438t.177.439t.438.177m-.5 7.807h1V8.346h-1zM3 20.077V3h18v14H6.077zM5.65 16H20V4H4v13.644zM4 16V4z");
}
</style><path class="zh39mxbuc"/>`,
		"fallback": "material-symbols-light:chat-info-outline-sharp",
	});
}

export default Component;
