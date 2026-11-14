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
		"content": `<style>.dillkacpf {
  d: path("M3 7.75h12.5v11H3Zm12.5 4.5l2.5 1l3-3.5q-1 3.5 0 7l-3-3.5l-2.5 1m-8-6.5l2-2.5l2 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yzpfjib8q {
  d: path("m9 14l2.5-1.5v3Zm-2.5-2.75h.01");
}
</style><g class="ulnmmdpxh"><path class="dillkacpf"/><path class="yzpfjib8q"/></g>`,
		"fallback": "uix-sharp:boxfish",
	});
}

export default Component;
