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
		"content": `<style>.i3xg1kb-h {
  fill: currentColor;
  d: path("M10 10v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h8c.265 0 .52.105.707.293l6 6A1 1 0 0 1 19 10Zm3-6v4h4Zm8 11a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Z");
}
</style><path class="i3xg1kb-h"/>`,
		"fallback": "coolicons:file-minus-corner-fill-sharp",
	});
}

export default Component;
