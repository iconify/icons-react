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
		"content": `<style>.l67a8ebfv {
  fill: currentColor;
  d: path("M5 21V3h14v18z");
}
</style><path class="l67a8ebfv"/>`,
		"fallback": "material-symbols-light:crop-portrait-sharp",
	});
}

export default Component;
