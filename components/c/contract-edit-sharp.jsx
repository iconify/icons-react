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
		"content": `<style>.xkl4dobky {
  fill: currentColor;
  d: path("M12 22H6q-1.25 0-2.125-.875T3 19v-3h3V2h15v7l-2 2V4H8v12h6l-2 2zm2 0v-3.075l6.575-6.55l3.05 3.075l-6.55 6.55zM9 12v-2h9v2zm0-3V7h9v2zm11.575 7.4l.925-.975l-.925-.925l-.95.95z");
}
</style><path class="xkl4dobky"/>`,
		"fallback": "material-symbols:contract-edit-sharp",
	});
}

export default Component;
