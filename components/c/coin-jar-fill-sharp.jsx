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
		"content": `<style>.fxpqorbgb {
  fill: currentColor;
  d: path("M5 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m7 2a3 3 0 1 1 6 0a3 3 0 0 1-6 0m5 6v.586l1.707 1.707A1 1 0 0 1 19 16v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5c0-.265.105-.52.293-.707L7 13.586V13a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2");
}
</style><path class="fxpqorbgb"/>`,
		"fallback": "coolicons:coin-jar-fill-sharp",
	});
}

export default Component;
