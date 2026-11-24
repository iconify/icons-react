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
		"content": `<style>.tleco_bvn {
  fill: currentColor;
  d: path("M13 2c1.298 0 2.451.838 2.854 2.072A5.005 5.005 0 0 1 20 9a1 1 0 0 1-2 0a3.01 3.01 0 0 0-2.21-2.896A3 3 0 0 1 13 8h-2a3 3 0 0 1-2.79-1.896A3.01 3.01 0 0 0 6 9v8a3 3 0 0 0 3 3a1 1 0 0 1 0 2a5 5 0 0 1-3.536-1.464A4.98 4.98 0 0 1 4 17V9a5.006 5.006 0 0 1 4.146-4.928A3.005 3.005 0 0 1 11 2Zm-1 19v-3c0-.265.105-.52.293-.707l5-5a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 16 22h-3a1 1 0 0 1-1-1");
}
</style><path class="tleco_bvn"/>`,
		"fallback": "coolicons:clipboard-edit-corner-fill-round",
	});
}

export default Component;
