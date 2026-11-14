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
		"content": `<style>.o4q3f989j {
  d: path("M13.142 20.5H2.5V10l6.75-6.5L16 10v4.158");
}

.r-jseobla {
  d: path("M7.5 20.5v-4H11v4m8-9.5v6m-3.25 4.5l1-4.5h4.5l.75 4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o4q3f989j"/><path class="r-jseobla"/></g>`,
		"fallback": "uix-sharp:chores",
	});
}

export default Component;
