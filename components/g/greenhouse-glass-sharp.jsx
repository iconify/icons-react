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
		"content": `<style>.yqn0seb9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.5v-9.75l.6-.45l8.05-6.1l.6-.45l.6.45l8.05 6.1l.6.45v10.5H2.75zm5.5-12.9v13.65m7.5-13.65v13.65m-13-7h5.5m7.5 0h5.5");
}
</style><path class="yqn0seb9f"/>`,
		"fallback": "iconoven:greenhouse-glass-sharp",
	});
}

export default Component;
