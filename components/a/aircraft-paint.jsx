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
		"content": `<style>.z-eq7acky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h6v9.5H3Zm2 0V9.5h2.5m7 9h7v-15H19ZM10 7l3-2m-2.5 5l3 .75");
}
</style><path class="z-eq7acky"/>`,
		"fallback": "uix-sharp:aircraft-paint",
	});
}

export default Component;
