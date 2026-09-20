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
		"content": `<style>.o51r2vbay {
  fill: currentColor;
  d: path("M4 22V2h16v20zm2-2h12V4h-2v7l-2.5-1.5L11 11V4H6zm0 0V4zm5-9l2.5-1.5L16 11l-2.5-1.5z");
}
</style><path class="o51r2vbay"/>`,
		"fallback": "material-symbols:book-outline-sharp",
	});
}

export default Component;
