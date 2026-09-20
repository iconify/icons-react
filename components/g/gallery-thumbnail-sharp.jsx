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
		"content": `<style>.jthz79b4x {
  fill: currentColor;
  d: path("M2.5 18V6h12v12zm14-7V6h5v5zM4.692 14.904h7.616l-2.433-3.25L8 14.154l-1.375-1.825zM16.5 18v-5h5v5z");
}
</style><path class="jthz79b4x"/>`,
		"fallback": "material-symbols-light:gallery-thumbnail-sharp",
	});
}

export default Component;
