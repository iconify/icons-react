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
		"content": `<style>.yylifvt0w {
  fill: currentColor;
  d: path("M6.923 15.385h6.77v-2.708l3.384 2.708v-6.77l-3.385 2.708V8.616H6.923zM3 19V5h18v14zm1-1h16V6H4zM4 6v12z");
}
</style><path class="yylifvt0w"/>`,
		"fallback": "material-symbols-light:hangout-video-outline-sharp",
	});
}

export default Component;
