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
		"content": `<style>.ei849gtbg {
  fill: currentColor;
  d: path("M7 10V4H2V2h20v2h-5v6zM2 22v-2h5v-6h10v6h5v2z");
}
</style><path class="ei849gtbg"/>`,
		"fallback": "material-symbols:align-stretch-outline",
	});
}

export default Component;
