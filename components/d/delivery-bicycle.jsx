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
		"content": `<style>.aaydl8blp {
  d: path("M3 17.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm11.5 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.k0j8q0bga {
  d: path("m17.75 17.5l-2-8.5H18M3.5 4.5H11v6H3.5Z");
}

.pbik6qbqu {
  d: path("M6.25 17.5h5.25L16 10m-4.5 7.5l-2-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aaydl8blp"/><path class="pbik6qbqu"/><path class="k0j8q0bga"/></g>`,
		"fallback": "uix-sharp:delivery-bicycle",
	});
}

export default Component;
