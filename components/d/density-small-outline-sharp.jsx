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
		"content": `<style>.waf4xobye {
  fill: currentColor;
  d: path("M3 22v-2h18v2zm0-6v-2h18v2zm0-6V8h18v2zm0-6V2h18v2z");
}
</style><path class="waf4xobye"/>`,
		"fallback": "material-symbols:density-small-outline-sharp",
	});
}

export default Component;
