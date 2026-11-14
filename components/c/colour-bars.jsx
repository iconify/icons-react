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
		"content": `<style>.dk2ilqbum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v17h-19Zm4.75 0V15M12 3.5V15m4.75-11.5V15M2.5 15h19");
}
</style><path class="dk2ilqbum"/>`,
		"fallback": "uix-sharp:colour-bars",
	});
}

export default Component;
