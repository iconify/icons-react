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
		"content": `<style>.eh_jugbkc {
  fill: currentColor;
  d: path("M6 15h12v4H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.upviaib9j {
  d: path("M6 15V8.5L12 3l6 5.5V15");
}

.v2r-s_jco {
  d: path("M2.5 21.5h19M6 10h12");
}
</style><g class="ulnmmdpxh"><path class="upviaib9j"/><path class="eh_jugbkc"/><path class="v2r-s_jco"/></g>`,
		"fallback": "uix-sharp:ground-floor",
	});
}

export default Component;
