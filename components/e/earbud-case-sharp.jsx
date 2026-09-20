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
		"content": `<style>.x3ik3fd6t {
  fill: currentColor;
  d: path("M4 11.577v5.115q0 1.365.972 2.336q.971.972 2.336.972h9.365q1.373 0 2.35-.963T20 16.692v-5.115h-3.75v3.75h-8.5v-3.75zm4.75 0v2.75h6.5v-2.75zm-4.75-1h16v-3.25q0-1.372-.977-2.35T16.673 4H7.308q-1.381 0-2.344.977T4 7.327z");
}
</style><path class="x3ik3fd6t"/>`,
		"fallback": "material-symbols-light:earbud-case-sharp",
	});
}

export default Component;
