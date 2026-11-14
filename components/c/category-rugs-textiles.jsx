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
		"content": `<style>.f1k751bwo {
  d: path("M11 13.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.h8rgc_6ms {
  d: path("M16.5 8h-12v11h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jobdllboo {
  d: path("M16.5 12.75c.25 0 .5-.25.75 0c.25 0 .75.5.75.75c.25.25.25 1 0 1.5c-.25.25-1 .75-1.5.75c-.5.25-1.5 0-2-.25c-.5-.5-1-1.25-1.25-2c0-.75.25-1.75.75-2.5s1.5-1.25 2.5-1.5c1 0 2.25.25 3 1c.75.5 1.5 2 1.75 3c0 1-.25 2.75-1.25 3.5c-.75 1-3 1.75-3.5 2M6.75 8v11M9 8v11m-6.5-9h2m-2 3.5h2m-2 3.5h2");
}
</style><g class="hntgybcog"><path class="h8rgc_6ms"/><path class="f1k751bwo"/><path class="jobdllboo"/></g>`,
		"fallback": "uix:category-rugs-textiles",
	});
}

export default Component;
