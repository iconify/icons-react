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
		"content": `<style>.chvxh_b9d {
  d: path("M7 5.25L12 8l5-2.75M12 8v5.75");
}

.j00yyvb9p {
  d: path("m12 2.5l5 2.75V11l-5 2.75L7 11V5.25Zm-7.5 19c0-3 3.25-5 7.5-5s7.5 2 7.5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j00yyvb9p"/><path class="chvxh_b9d"/></g>`,
		"fallback": "uix-sharp:avatar-3d",
	});
}

export default Component;
