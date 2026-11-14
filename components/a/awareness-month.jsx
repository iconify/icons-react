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
		"content": `<style>.dhkafybpt {
  d: path("M3.5 4.5h17V21h-17Zm4.5-2V6m8-3.5V6M3.5 8.5h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4g2ogbbj {
  d: path("m9.5 18.5l3.75-4.25a1.75 1.75 0 1 0-2.5 0l3.75 4.25");
}
</style><g class="ulnmmdpxh"><path class="dhkafybpt"/><path class="v4g2ogbbj"/></g>`,
		"fallback": "uix-sharp:awareness-month",
	});
}

export default Component;
