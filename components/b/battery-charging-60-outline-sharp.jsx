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
		"content": `<style>.n_v3b-biy {
  fill: currentColor;
  d: path("M7 22V4h3V2h4v2h3v8q-2.5.025-4.25 1.763T11 18q0 1.15.4 2.175T12.525 22zm2-10h6V6H9zm7.5 10v-3H14l3.5-5v3H20z");
}
</style><path class="n_v3b-biy"/>`,
		"fallback": "material-symbols:battery-charging-60-outline-sharp",
	});
}

export default Component;
