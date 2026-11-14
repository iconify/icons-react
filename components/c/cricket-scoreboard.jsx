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
		"content": `<style>.fj_875bzk {
  d: path("M15 7h3v6h-3Z");
}

.gegaziaej {
  d: path("M2.5 3.5h19v13h-19Zm4.5 13V21m10-4.5V21M8 7v6m2.75 0l1.5-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gegaziaej"/><path class="fj_875bzk"/></g>`,
		"fallback": "uix-sharp:cricket-scoreboard",
	});
}

export default Component;
