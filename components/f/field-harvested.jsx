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
		"content": `<style>.q-ggc-6-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.3 19.5H2.5v-17h17v10.8M7 6v3m4-3v3m4-3v3m-8 3v3m4-3v3m3.75 3l2 2L21 15.75");
}
</style><path class="q-ggc-6-i"/>`,
		"fallback": "uix-sharp:field-harvested",
	});
}

export default Component;
