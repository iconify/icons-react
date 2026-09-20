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
		"content": `<style>.yrhtr9bqg {
  fill: currentColor;
  d: path("M2 22V2h20v16H6z");
}
</style><path class="yrhtr9bqg"/>`,
		"fallback": "material-symbols:chat-bubble-sharp",
	});
}

export default Component;
