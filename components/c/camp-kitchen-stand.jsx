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
		"content": `<style>.vctjywz-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19m-17 0l15 8.5m0-8.5l-15 8.5m3-12h9V13h-9Zm2 0V5h5v4.5");
}
</style><path class="vctjywz-z"/>`,
		"fallback": "uix-sharp:camp-kitchen-stand",
	});
}

export default Component;
