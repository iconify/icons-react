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
		"content": `<style>.xo1fodq5q {
  fill: currentColor;
  d: path("M12 9a3 3 0 0 0-3 3v9a1 1 0 0 1-1 1a5 5 0 0 1-3.536-1.464A4.98 4.98 0 0 1 3 17v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l3.08 2.695A1.001 1.001 0 0 1 17.714 9Zm8 3a1 1 0 0 1 0 2v1.586l.707.707c.311.31.456.752.382 1.186C20.928 18.428 19.898 19 19 19h-1v2a1 1 0 0 1-2 0v-2h-1c-.898 0-1.928-.572-2.089-1.521a1.34 1.34 0 0 1 .382-1.186l.707-.707V14a1 1 0 0 1 0-2Z");
}
</style><path class="xo1fodq5q"/>`,
		"fallback": "coolicons:house-pin-corner-fill-round",
	});
}

export default Component;
