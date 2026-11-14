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
		"content": `<style>.euwz0k_rg {
  d: path("m3 12l5.5-6h12v12h-12Z");
}

.o732-9byz {
  d: path("M6.75 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM12 10h5.5M12 14h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="euwz0k_rg"/><path class="o732-9byz"/></g>`,
		"fallback": "uix-sharp:artefact-tag",
	});
}

export default Component;
