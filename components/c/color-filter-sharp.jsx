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
		"content": `<style>.fimyzsbxg {
  d: path("M7 8.75a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.ik822hbjv {
  d: path("M10.75 15.25a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.ivs_ozbui {
  d: path("M3.25 15.25a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fimyzsbxg"/><path class="ivs_ozbui"/><path class="ik822hbjv"/></g>`,
		"fallback": "iconoven:color-filter-sharp",
	});
}

export default Component;
