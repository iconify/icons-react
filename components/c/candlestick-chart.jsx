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
		"content": `<style>.sp0dfpbng {
  fill: currentColor;
  d: path("M8 19v-2H6V7h2V5h1v2h2v10H9v2zm7 0v-4.615h-2V8.808h2V5h1v3.808h2v5.577h-2V19z");
}
</style><path class="sp0dfpbng"/>`,
		"fallback": "material-symbols-light:candlestick-chart",
	});
}

export default Component;
