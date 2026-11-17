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
		"content": `<style>.xc900twfx {
  fill: currentColor;
  d: path("M19.707 8.293A1 1 0 0 1 19 10h-6a3 3 0 0 0-3 3v8a1 1 0 0 1-1 1a5 5 0 0 1-3.536-1.464A4.98 4.98 0 0 1 4 17V7a5 5 0 0 1 5-5h4c.265 0 .52.105.707.293ZM13 6a2 2 0 0 0 2 2h2l-4-4Zm7 10a1.002 1.002 0 0 1 .707 1.707l-4 4a.999.999 0 1 1-1.414-1.414L17.586 18H15a1.002 1.002 0 0 1-.707-1.707l4-4a.999.999 0 1 1 1.414 1.414L17.414 16Z");
}
</style><path class="xc900twfx"/>`,
		"fallback": "coolicons:file-zap-corner-fill-round",
	});
}

export default Component;
