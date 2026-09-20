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
		"content": `<style>.zo3uywbdg {
  fill: currentColor;
  d: path("M6.5 16.5h11v-2h-11zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="zo3uywbdg"/>`,
		"fallback": "material-symbols-light:call-to-action-outline-sharp",
	});
}

export default Component;
