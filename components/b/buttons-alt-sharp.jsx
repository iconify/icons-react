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
		"content": `<style>.r_qps2b4x {
  fill: currentColor;
  d: path("M3 17V7h18v10zm4.558-2.5h.884v-2.058H10.5v-.884H8.442V9.5h-.884v2.058H5.5v.884h2.058z");
}
</style><path class="r_qps2b4x"/>`,
		"fallback": "material-symbols-light:buttons-alt-sharp",
	});
}

export default Component;
