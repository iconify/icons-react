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
		"content": `<style>.eqt2lbboq {
  fill: currentColor;
  d: path("M11.5 15.596h1V12.5h3.077v-1H12.5V8.423h-1V11.5H8.404v1H11.5zm.506 6.081L2.34 12l9.665-9.671L21.66 12z");
}
</style><path class="eqt2lbboq"/>`,
		"fallback": "material-symbols-light:add-diamond-sharp",
	});
}

export default Component;
