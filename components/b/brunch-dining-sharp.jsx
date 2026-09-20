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
		"content": `<style>.njg57bcvv {
  fill: currentColor;
  d: path("M2 22v-2h14v2zm0-4v-2h5v-2h4v2h5v2zm16 4v-6.1q-.9-1.025-1.45-2.025T16 11.45V2h6v9.45q0 1.425-.537 2.438T20 15.9V20h2v2zm0-14h2V4h-2z");
}
</style><path class="njg57bcvv"/>`,
		"fallback": "material-symbols:brunch-dining-sharp",
	});
}

export default Component;
