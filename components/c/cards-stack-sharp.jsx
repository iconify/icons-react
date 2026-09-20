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
		"content": `<style>.xbo2b4bzc {
  fill: currentColor;
  d: path("M10 9h8V7h-8zm0 3h5v-2h-5zm-6.525 9.25L1.75 8.35L4 8.125V18h15.025v1.1zM6 16.1V3h16v13.1z");
}
</style><path class="xbo2b4bzc"/>`,
		"fallback": "material-symbols:cards-stack-sharp",
	});
}

export default Component;
