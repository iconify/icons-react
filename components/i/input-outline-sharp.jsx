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
		"content": `<style>.f_4vmdfre {
  fill: currentColor;
  d: path("M2 20v-5h2v3h16V6H4v3H2V4h20v16zm9.5-3.5l-1.4-1.45L12.175 13H2v-2h10.175L10.1 8.95l1.4-1.45L16 12z");
}
</style><path class="f_4vmdfre"/>`,
		"fallback": "material-symbols:input-outline-sharp",
	});
}

export default Component;
