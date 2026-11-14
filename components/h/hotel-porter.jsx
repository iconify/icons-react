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
		"content": `<style>.ecc-66ukw {
  d: path("M4.5 3v15h15");
}

.gdw7thbno {
  d: path("M7.5 12h11v6h-11ZM9 6h8v6H9Z");
}

.gt9u51vjl {
  d: path("M6.25 19.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm8.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ecc-66ukw"/><path class="gdw7thbno"/><path class="gt9u51vjl"/></g>`,
		"fallback": "uix-sharp:hotel-porter",
	});
}

export default Component;
