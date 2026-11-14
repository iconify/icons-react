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
		"content": `<style>.cbv7gduxy {
  d: path("M13.75 13.75h7.75a7.75 7.75 0 0 1-7.75 7.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xfzjhfk0n {
  d: path("M11 11h7.75A7.75 7.75 0 1 0 11 18.75Z");
}
</style><g class="ulnmmdpxh"><path class="xfzjhfk0n"/><path class="cbv7gduxy"/></g>`,
		"fallback": "uix-sharp:crypto-portfolio",
	});
}

export default Component;
