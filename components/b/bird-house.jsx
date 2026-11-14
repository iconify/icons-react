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
		"content": `<style>.ket96zbuo {
  d: path("M3.5 10L12 2.5l8.5 7.5");
}

.u9a8_31ra {
  d: path("M9.75 11.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y7ofqitit {
  d: path("M6 7.75V17h12V7.75M12 17v4.5");
}
</style><g class="ulnmmdpxh"><path class="ket96zbuo"/><path class="y7ofqitit"/><path class="u9a8_31ra"/></g>`,
		"fallback": "uix-sharp:bird-house",
	});
}

export default Component;
