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
		"content": `<style>.ndej6767w {
  fill: currentColor;
  d: path("M5.5 13.5h8v-6h-8zM3 19V5h18v14z");
}
</style><path class="ndej6767w"/>`,
		"fallback": "material-symbols-light:featured-video-sharp",
	});
}

export default Component;
