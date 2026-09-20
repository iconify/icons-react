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
		"content": `<style>.k_ka0jbrj {
  fill: currentColor;
  d: path("M10 15v-5h8v5zm-8 5V4h20v16zm2-2h16V8H4z");
}
</style><path class="k_ka0jbrj"/>`,
		"fallback": "material-symbols:iframe-sharp",
	});
}

export default Component;
