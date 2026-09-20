import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kvb69eb2i {
  fill: currentColor;
  d: path("M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm1 2h6a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2");
}
</style><path class="kvb69eb2i"/>`,
		"fallback": "fluent:document-header-20-filled",
	});
}

export default Component;
