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
		"content": `<style>.xjwn93ips {
  fill: currentColor;
  d: path("M8 19v-2H6V7h2V5h1v2h2v10H9v2zm-1-3h3V8H7zm8 3v-4.615h-2V8.808h2V5h1v3.808h2v5.577h-2V19zm-1-5.616h3V9.808h-3zm1.5-1.788");
}
</style><path class="xjwn93ips"/>`,
		"fallback": "material-symbols-light:candlestick-chart-outline",
	});
}

export default Component;
