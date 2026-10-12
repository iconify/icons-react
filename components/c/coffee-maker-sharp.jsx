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
		"content": `<style>.e5xggyboj {
  d: path("M4.75 2.75h16.5v5.5h-12v10.5h12v2.5H2.75V2.75z");
}

.humlyqbzy {
  d: path("M12.75 11h5.75l-.14.99l-.47 3.27l-.14.99H12.5l-.14-.99l-.47-3.27l-.14-.99z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e5xggyboj"/><path class="humlyqbzy"/></g>`,
		"fallback": "iconoven:coffee-maker-sharp",
	});
}

export default Component;
