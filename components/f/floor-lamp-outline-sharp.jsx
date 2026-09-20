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
		"content": `<style>.zzq521n1x {
  fill: currentColor;
  d: path("M11 19v-8H4.65l2.775-9h9.15l2.775 9H13v8zM7.35 9h9.3L15.1 4H8.9zM8 22v-2h8v2zm4-15.5");
}
</style><path class="zzq521n1x"/>`,
		"fallback": "material-symbols:floor-lamp-outline-sharp",
	});
}

export default Component;
