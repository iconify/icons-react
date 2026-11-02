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
		"content": `<style>.il26dnbhe {
  fill: currentColor;
  d: path("M13 3v1.171A3 3 0 0 1 15 7v3c0 1.27-.803 2.405-2 2.829V15a1 1 0 0 1-2 0v-2.171A3 3 0 0 1 9 10V7c0-1.27.803-2.405 2-2.829V3a1 1 0 0 1 2 0m-7 9v2.171A3 3 0 0 1 8 17v1c0 1.27-.803 2.405-2 2.829V21a1 1 0 0 1-2 0v-.171A3 3 0 0 1 2 18v-1c0-1.27.803-2.405 2-2.829V12a1 1 0 0 1 2 0m14 0v2.171a3 3 0 0 1 0 5.658V21a1 1 0 0 1-2 0v-1.171a3 3 0 0 1 0-5.658V12a1 1 0 0 1 2 0");
}
</style><path class="il26dnbhe"/>`,
		"fallback": "coolicons:chart-candlestick-fill-round",
	});
}

export default Component;
