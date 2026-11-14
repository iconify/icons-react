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
		"content": `<style>.s73rmnvbn {
  d: path("M7.25 8.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.tw40btbsg {
  d: path("M5.636 12V5.636H12l9.546 9.546l-6.364 6.364Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y6cjf5j_m {
  d: path("M7.75 7.75C5 5 3 5 2.5 2.5");
}
</style><g class="ulnmmdpxh"><path class="tw40btbsg"/><path class="s73rmnvbn"/><path class="y6cjf5j_m"/></g>`,
		"fallback": "uix-sharp:clothes-tag",
	});
}

export default Component;
