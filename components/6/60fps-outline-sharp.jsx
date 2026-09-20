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
		"content": `<style>.ifgdf_6fq {
  fill: currentColor;
  d: path("M2.885 18.116V5.885h6.23v1.23h-5v3.77h6v7.23zm1.23-1.231h4.77v-4.77h-4.77zm10 0h5.77v-9.77h-5.77zm-1.23 1.23V5.886h8.23v12.23z");
}
</style><path class="ifgdf_6fq"/>`,
		"fallback": "material-symbols-light:60fps-outline-sharp",
	});
}

export default Component;
