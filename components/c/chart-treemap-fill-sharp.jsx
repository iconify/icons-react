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
		"content": `<style>.m7nrvfbzk {
  fill: currentColor;
  d: path("M9 2v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm2 7V2h10a1 1 0 0 1 1 1v6Zm4 13h-4V11h4Zm7-11v10a1 1 0 0 1-1 1h-4V11Z");
}
</style><path class="m7nrvfbzk"/>`,
		"fallback": "coolicons:chart-treemap-fill-sharp",
	});
}

export default Component;
