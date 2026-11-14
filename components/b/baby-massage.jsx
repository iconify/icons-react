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
		"content": `<style>.vz-mheber {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 21.5l-5-6A1.25 1.25 0 0 1 7 14l.5.75V10.5a1.5 1.5 0 0 1 3 0v-2a1.5 1.5 0 0 1 3 0V9a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1 3 0v6c0 2.5-1 4.5-2.5 4.5Zm.5-11V14m3-5v5m3-3v3m-8-9q5-3.5 10 0");
}
</style><path class="vz-mheber"/>`,
		"fallback": "uix-sharp:baby-massage",
	});
}

export default Component;
