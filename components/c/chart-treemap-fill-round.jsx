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
		"content": `<style>.lqu48-7cw {
  fill: currentColor;
  d: path("M9 2v20H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm2 7V2h6a5 5 0 0 1 5 5v2Zm4 13h-4V11h4Zm7-11v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22V11Z");
}
</style><path class="lqu48-7cw"/>`,
		"fallback": "coolicons:chart-treemap-fill-round",
	});
}

export default Component;
