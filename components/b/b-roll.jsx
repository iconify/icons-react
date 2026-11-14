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
		"content": `<style>.gh5g6vjfy {
  d: path("M12.2 18.5H2.5v-16h14v9.7m-10-9.7v16m6-16v9.7m-10-1.7h4m6 0h4M15 15h7v7h-7Z");
}

.to3aqnb5o {
  d: path("m15.5 21.5l3-3l3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gh5g6vjfy"/><path class="to3aqnb5o"/></g>`,
		"fallback": "uix-sharp:b-roll",
	});
}

export default Component;
