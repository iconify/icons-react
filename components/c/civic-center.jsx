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
		"content": `<style>.tdq4syb1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 10a4.5 4.5 0 0 1 9 0M12 3v2.5M3.5 10h17M6 10v8m4-8v8m4-8v8m4-8v8M3 18h18M2.5 20.75h19");
}
</style><path class="tdq4syb1q"/>`,
		"fallback": "uix-sharp:civic-center",
	});
}

export default Component;
