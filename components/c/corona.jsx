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
		"content": `<style>.etquhkddw {
  fill: currentColor;
  d: path("M7.25 12a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Z");
}

.hbq-o3b2w {
  d: path("M12 4.25V2.5m0 17.25v1.75M4.25 12H2.5m17.25 0h1.75m-4-5.5L19 5M6.5 6.5L5 5m12.5 12.5L19 19M6.5 17.5L5 19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="etquhkddw"/><path class="hbq-o3b2w"/></g>`,
		"fallback": "uix-sharp:corona",
	});
}

export default Component;
