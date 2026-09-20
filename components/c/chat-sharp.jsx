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
		"content": `<style>.zf4adxg1q {
  fill: currentColor;
  d: path("M2 22V2h20v16H6zm4-8h8v-2H6zm0-3h12V9H6zm0-3h12V6H6z");
}
</style><path class="zf4adxg1q"/>`,
		"fallback": "material-symbols:chat-sharp",
	});
}

export default Component;
