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
		"content": `<style>.xgzcaq_bh {
  fill: currentColor;
  d: path("M8.275 22L5.5 13H2v-2h4.975l1.875 6.075L12.2 2h1.6l2.35 10.175L17.775 7H19.2l1.5 4H22v2h-2.7l-.725-1.925L16.725 17H15.2L13 7.525L9.8 22z");
}
</style><path class="xgzcaq_bh"/>`,
		"fallback": "material-symbols:earthquake-sharp",
	});
}

export default Component;
