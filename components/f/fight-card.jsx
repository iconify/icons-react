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
		"content": `<style>.hslmekbdq {
  d: path("M9 18.5H6V5h11v3");
}

.mwuoesbdk {
  d: path("M6 15.5H3v-13h11V5");
}

.pa4gp3bcm {
  d: path("M9 8h11v13.5H9Zm3 4.5h5M12 17h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mwuoesbdk"/><path class="hslmekbdq"/><path class="pa4gp3bcm"/></g>`,
		"fallback": "uix-sharp:fight-card",
	});
}

export default Component;
