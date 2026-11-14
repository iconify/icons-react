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
		"content": `<style>.g4amvs9gp {
  d: path("m6.5 12.5l5.5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x8vht4e0n {
  fill: currentColor;
  d: path("M12 13.25a1.75 1.5 0 1 0 3.5 0a1.75 1.5 0 1 0-3.5 0Z");
}

.y884sf7ga {
  d: path("m2.5 9.5l4-5.5L12 6l5.5-2l4 5.5Zm4 0V14a5.5 5.5 0 0 0 11 0V9.5");
}
</style><g class="ulnmmdpxh"><path class="y884sf7ga"/><path class="x8vht4e0n"/><path class="g4amvs9gp"/></g>`,
		"fallback": "uix-sharp:hero-pirate",
	});
}

export default Component;
