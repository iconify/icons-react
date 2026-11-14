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
		"content": `<style>.falrofb-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 20.5l9.5-17l9.5 17ZM8.75 9.25h6.5M5.5 15h13M12 17.75h.01");
}
</style><path class="falrofb-q"/>`,
		"fallback": "uix-sharp:energy-pyramid",
	});
}

export default Component;
