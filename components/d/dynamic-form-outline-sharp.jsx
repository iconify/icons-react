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
		"content": `<style>.es8c01myz {
  fill: currentColor;
  d: path("M2.5 11V4.5H13V11zm1-1H12V5.5H3.5zm-1 9.5V13H15v6.5zm1-1H14V14H3.5zm13.5 1V11h-2V4.5h6.27l-2 5.116h1.96zM5 17h1.5v-1.5H5zm0-8.5h1.5V7H5zM3.5 10V5.5zm0 8.5V14z");
}
</style><path class="es8c01myz"/>`,
		"fallback": "material-symbols-light:dynamic-form-outline-sharp",
	});
}

export default Component;
