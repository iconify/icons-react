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
		"content": `<style>.qgvmjc3hy {
  fill: currentColor;
  d: path("M5 7a1 1 0 0 1 1-1h4V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7.382l.553-.276a1 1 0 1 1 .894 1.788l-1.105.553l.552 1.106a1 1 0 0 1-.954 1.445a1 1 0 0 1-.834-.551l-.553-1.105l-2.211 1.105l.552 1.106a1 1 0 1 1-1.788.894l-.553-1.105l-2.211 1.105l.552 1.106a1 1 0 1 1-1.788.894l-.553-1.105l-2.211 1.105l.552 1.106a1 1 0 1 1-1.788.894l-.553-1.105l-1.106.552a1 1 0 0 1-1.445-.954a1 1 0 0 1 .551-.834L5 18.382Zm7 1h5V5h-5Zm-2 3V8H7v3Z");
}
</style><path class="qgvmjc3hy"/>`,
		"fallback": "coolicons:cog-railway-fill-sharp",
	});
}

export default Component;
