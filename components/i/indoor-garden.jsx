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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.icti-_b1u {
  d: path("M3.75 17h16.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 3.75 17");
}

.ri4n1obrc {
  d: path("M15 12V6.5a1.5 1.5 0 0 1 3 0V12");
}

.y-gkhybyt {
  d: path("M6.742 12h1.516a1.5 1.5 0 0 1 1.484 1.723l-.3 2A1.5 1.5 0 0 1 7.958 17h-.916a1.5 1.5 0 0 1-1.484-1.277l-.3-2A1.5 1.5 0 0 1 6.742 12m9 0h1.516a1.5 1.5 0 0 1 1.484 1.723l-.3 2A1.5 1.5 0 0 1 16.958 17h-.916a1.5 1.5 0 0 1-1.484-1.277l-.3-2A1.5 1.5 0 0 1 15.742 12M7.5 12V8m0 1.5c0-2.5-1.75-4-4.25-4c0 2.5 1.75 4 4.25 4m0-1.5c0-2.5 1.75-4 4-4c0 2.5-1.75 4-4 4");
}
</style><g class="hntgybcog"><path class="icti-_b1u"/><path class="y-gkhybyt"/><path class="ri4n1obrc"/></g>`,
		"fallback": "uix:indoor-garden",
	});
}

export default Component;
