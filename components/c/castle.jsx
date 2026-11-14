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
		"content": `<style>.n5w2i237e {
  d: path("M10 21v-5a2 2 0 0 1 4 0v5");
}

.o_z0nhg6w {
  d: path("M4 21V8h4v3h2V8h4v3h2V8h4v13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o_z0nhg6w"/><path class="n5w2i237e"/></g>`,
		"fallback": "uix-sharp:castle",
	});
}

export default Component;
