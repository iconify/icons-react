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
		"content": `<style>.qqe9pyrdv {
  fill: currentColor;
  d: path("M9 20v-6q-2.075 0-3.537-1.463T4 9t1.463-3.537T9 4h9v2h-2v14h-2V6h-3v14z");
}
</style><path class="qqe9pyrdv"/>`,
		"fallback": "material-symbols:format-paragraph",
	});
}

export default Component;
