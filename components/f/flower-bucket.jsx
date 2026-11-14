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
		"content": `<style>.isk_8dfjq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 11h15L18 21.5H6Zm4 0L6.75 7.5M12 11V5.75M15.5 11l1.75-3.5M4.25 6a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6-2a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6 2a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="isk_8dfjq"/>`,
		"fallback": "uix-sharp:flower-bucket",
	});
}

export default Component;
