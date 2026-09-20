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
		"content": `<style>.d6bwznxdk {
  fill: currentColor;
  d: path("M6 17h12v-3H6zm-4 3V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="d6bwznxdk"/>`,
		"fallback": "material-symbols:call-to-action-outline-sharp",
	});
}

export default Component;
