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
		"content": `<style>.egf2uhb-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.98 6.61l6.54 4.53l1.23.86l-1.23.86l-6.54 4.53l-1.23.86V5.75zm9.5 0l6.54 4.53l1.23.86l-1.23.86l-6.54 4.53l-1.23.86V5.75z");
}
</style><path class="egf2uhb-a"/>`,
		"fallback": "iconoven:fast-forward-circle-sharp",
	});
}

export default Component;
