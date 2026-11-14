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
		"content": `<style>.ek5bci01o {
  d: path("M12 10c-2.25-2-1.5-4.5 0-4.5S14.25 8 12 10Zm0 0c2.75-1 4.75 1 4 2.25S12.5 13 12 10Zm0 0c-.5 3-3.25 3.5-4 2.25S9.25 9 12 10Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x1it-6b0e {
  d: path("M4.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Zm7.5 7.5v4m-4 0h8");
}
</style><g class="ulnmmdpxh"><path class="x1it-6b0e"/><path class="ek5bci01o"/></g>`,
		"fallback": "uix-sharp:desk-fan",
	});
}

export default Component;
