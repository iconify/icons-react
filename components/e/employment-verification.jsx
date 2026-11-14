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
		"content": `<style>.dkmtvzdcs {
  d: path("M2.5 2.5h14V12h-14Z");
}

.hcydr8blv {
  d: path("M9.75 16.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm7.25 3l2.5 2.5M5 7.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM10.5 6h3m-3 3h2");
}

.ivektacxu {
  d: path("m12 16.25l1.5 1.5L16 15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dkmtvzdcs"/><path class="hcydr8blv"/><path class="ivektacxu"/></g>`,
		"fallback": "uix-sharp:employment-verification",
	});
}

export default Component;
