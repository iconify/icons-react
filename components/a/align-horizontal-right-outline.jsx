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
		"content": `<style>.bpoderofg {
  fill: currentColor;
  d: path("M20 22V2h2v20zM8 17v-3h10v3zm-6-7V7h16v3z");
}
</style><path class="bpoderofg"/>`,
		"fallback": "material-symbols:align-horizontal-right-outline",
	});
}

export default Component;
