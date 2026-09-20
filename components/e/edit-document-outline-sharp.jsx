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
		"content": `<style>.nkst98wbu {
  fill: currentColor;
  d: path("M14 22v-3.075l6.575-6.55l3.075 3.05L17.075 22zm7.5-6.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zM4 22V2h10l6 6v3h-2V9h-5V4H6v16h6v2zm15.025-5.025l-.475-.45l.925.925z");
}
</style><path class="nkst98wbu"/>`,
		"fallback": "material-symbols:edit-document-outline-sharp",
	});
}

export default Component;
