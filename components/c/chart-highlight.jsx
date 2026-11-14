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
		"content": `<style>.j5y_q1bnw {
  d: path("M2.75 11h3v10h-3Zm5.5-5h3v15h-3Z");
}

.k60s7xbiu {
  fill: currentColor;
  d: path("M13.75 3h3v18h-3Z");
}

.musuhdblq {
  d: path("M19.25 9h2.5v12h-2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j5y_q1bnw"/><path class="k60s7xbiu"/><path class="musuhdblq"/></g>`,
		"fallback": "uix-sharp:chart-highlight",
	});
}

export default Component;
