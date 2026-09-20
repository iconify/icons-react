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
		"content": `<style>.c_m1ktm7j {
  fill: currentColor;
  d: path("M5.077 19.5v-15h1v15zm12.846 0v-7H8.846v-1h9.077v-7h1v15z");
}
</style><path class="c_m1ktm7j"/>`,
		"fallback": "material-symbols-light:format-text-clip",
	});
}

export default Component;
