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
		"content": `<style>.ou_wv0b-c {
  fill: currentColor;
  d: path("M14 21v-8h8v8zM2 18v-2h9v2zm12-7V3h8v8zM2 8V6h9v2z");
}
</style><path class="ou_wv0b-c"/>`,
		"fallback": "material-symbols:event-list-sharp",
	});
}

export default Component;
