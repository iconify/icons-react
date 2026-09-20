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
		"content": `<style>.ssx64zswu {
  fill: currentColor;
  d: path("M16 12.125V4h2v6.125zM4 20V4h2v16zm6-12V4h2v4zm0 6v-4h2v4zm0 6v-4h2v4zm4 0v-3.075l6.575-6.55l3.075 3.05L17.075 20zm6.575-5.6l.925-.975l-.925-.925l-.95.95z");
}
</style><path class="ssx64zswu"/>`,
		"fallback": "material-symbols:edit-road-sharp",
	});
}

export default Component;
