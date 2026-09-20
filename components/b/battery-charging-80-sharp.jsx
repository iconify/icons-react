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
		"content": `<style>.j88qngbxb {
  fill: currentColor;
  d: path("M7 22V4h3V2h4v2h3v8q-2.5.025-4.25 1.763T11 18q0 1.15.4 2.175T12.525 22zm2-12h6V6H9zm7.5 12v-3H14l3.5-5v3H20z");
}
</style><path class="j88qngbxb"/>`,
		"fallback": "material-symbols:battery-charging-80-sharp",
	});
}

export default Component;
