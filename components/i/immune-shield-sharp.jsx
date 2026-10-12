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
		"content": `<style>.x8vqccbau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75L4.75 5.5v5.75c0 4.75 3 8 7.25 10c4.25-2 7.25-5.25 7.25-10V5.5Zm0 15V12.5m0 0L8.75 9.25M12 12.5l3.25-3.25");
}
</style><path class="x8vqccbau"/>`,
		"fallback": "iconoven:immune-shield-sharp",
	});
}

export default Component;
