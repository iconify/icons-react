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
		"content": `<style>.wlsxoe2mq {
  fill: currentColor;
  d: path("M5.5 16.5h4v-1h-4zm9.05-2.211l4.238-4.239l-.713-.714l-3.525 3.55l-1.425-1.424l-.688.713zM5.5 12.5h4v-1h-4zm0-4h4v-1h-4zM3 20V4h18v16z");
}
</style><path class="wlsxoe2mq"/>`,
		"fallback": "material-symbols-light:fact-check-sharp",
	});
}

export default Component;
