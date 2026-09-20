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
		"content": `<style>.jfd0e_j7o {
  fill: currentColor;
  d: path("M2 20V10l6-6l6 6v10H9v-5H7v5zm5-7h2v-2H7zm9 7V9.175L10.825 4h2.825L18 8.35V20zm4 0V7.525L16.475 4H19.3L22 6.7V20z");
}
</style><path class="jfd0e_j7o"/>`,
		"fallback": "material-symbols:holiday-village",
	});
}

export default Component;
