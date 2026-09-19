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
		"content": `<style>.yjli1w1tx {
  fill: currentColor;
  d: path("M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72A6.87 6.87 0 0 0 5.12 11v5.82L3 18.94V20h18v-1.06zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3z");
}
</style><path class="yjli1w1tx"/>`,
		"fallback": "ic:add-alert",
	});
}

export default Component;
