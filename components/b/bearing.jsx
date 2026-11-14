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
		"content": `<style>.d6aam1rah {
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.hcgwmxw3y {
  d: path("M9.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm6.75 4.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-2.75 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-8 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-2.75-8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="d6aam1rah"/><path class="hcgwmxw3y"/></g>`,
		"fallback": "uix-sharp:bearing",
	});
}

export default Component;
