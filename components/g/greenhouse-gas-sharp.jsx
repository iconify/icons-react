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
		"content": `<style>.wodt2rq8n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 20.5V15l.66-.36l6.93-3.78l.66-.36l.66.36l6.93 3.78l.66.36v6.25H3.75zm-1 .75h18.5M3.75 16.5h16.5m-8.25 0v4.75M12 7.5V2.75M9.75 5L12 2.75L14.25 5");
}
</style><path class="wodt2rq8n"/>`,
		"fallback": "iconoven:greenhouse-gas-sharp",
	});
}

export default Component;
