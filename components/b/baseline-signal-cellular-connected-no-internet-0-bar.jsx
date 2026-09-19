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
		"content": `<style>.on1lewblq {
  fill: currentColor;
  d: path("M20 18h2v-8h-2zm0 4h2v-2h-2zm-2-2v2H2L22 2v6h-2V6.83L6.83 20z");
}
</style><path class="on1lewblq"/>`,
		"fallback": "ic:baseline-signal-cellular-connected-no-internet-0-bar",
	});
}

export default Component;
