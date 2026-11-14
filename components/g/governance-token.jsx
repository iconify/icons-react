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
		"content": `<style>.d-63bob2d {
  d: path("M3.5 9v5.5a8.5 5.5 0 0 0 17 0V9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ulve6emah {
  d: path("M3.5 9a8.5 5.5 0 1 0 17 0a8.5 5.5 0 1 0-17 0Z");
}

.vddqnrbls {
  d: path("m9 9l2 2l4-4");
}
</style><g class="ulnmmdpxh"><path class="ulve6emah"/><path class="d-63bob2d"/><path class="vddqnrbls"/></g>`,
		"fallback": "uix-sharp:governance-token",
	});
}

export default Component;
