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
		"content": `<style>.a92gt-0nr {
  fill: currentColor;
  d: path("m16.707 2.293l5 5A1 1 0 0 1 22 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h3V9h-4a1 1 0 0 1-1-1V4h-4a1 1 0 0 1 0-2h5c.265 0 .52.105.707.293M8 5c.265 0 .52.105.707.293l5 5A1 1 0 0 1 14 11v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 .414V7h1.586ZM8 11h4L8 7Z");
}
</style><path class="a92gt-0nr"/>`,
		"fallback": "coolicons:files-fill-sharp",
	});
}

export default Component;
