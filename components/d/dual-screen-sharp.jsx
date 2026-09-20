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
		"content": `<style>.jizizubxe {
  fill: currentColor;
  d: path("M5 18.277V3l8 3.198v15.29zM15 18V4.842L10.392 3H19v15z");
}
</style><path class="jizizubxe"/>`,
		"fallback": "material-symbols-light:dual-screen-sharp",
	});
}

export default Component;
