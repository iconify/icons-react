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
		"content": `<style>.u4ba9cxuq {
  fill: currentColor;
  d: path("M4 18V6zm-2 2V4h8l2 2h10v2.15l-2 1.975V8h-8.825l-2-2H4v12h8.1l-.1.1V20zm12 2v-3.075l6.575-6.55l3.075 3.05L17.075 22zm7.5-6.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zm3.525-3.525l-.475-.45l.925.925z");
}
</style><path class="u4ba9cxuq"/>`,
		"fallback": "material-symbols:bookmark-manager-outline-sharp",
	});
}

export default Component;
