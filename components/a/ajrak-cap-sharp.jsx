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
		"content": `<style>.jkycjqbxs {
  d: path("M3.75 15a8.25 8.25 0 0 1 16.5 0v3.75H3.75V17.5Zm.75-2h15");
}

.wwct9wbvc {
  d: path("m7 14.75l1.5 1.5l-1.5 1.5l-1.5-1.5Zm5 0l1.5 1.5l-1.5 1.5l-1.5-1.5Zm5 0l1.5 1.5l-1.5 1.5l-1.5-1.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="jkycjqbxs"/><path class="wwct9wbvc"/></g>`,
		"fallback": "iconoven:ajrak-cap-sharp",
	});
}

export default Component;
