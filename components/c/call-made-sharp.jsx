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
		"content": `<style>.sndm-x75k {
  fill: currentColor;
  d: path("M5.708 19L5 18.292L16.292 7H9V6h9v9h-1V7.708z");
}
</style><path class="sndm-x75k"/>`,
		"fallback": "material-symbols-light:call-made-sharp",
	});
}

export default Component;
