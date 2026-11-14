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
		"content": `<style>.gv35aobpj {
  d: path("M12.75 8L9 13.75h2.75l-.5 3.5L15 12h-2.75Z");
}

.m7latrbdk {
  d: path("m12 3l9.5 16.75h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m7latrbdk"/><path class="gv35aobpj"/></g>`,
		"fallback": "uix-sharp:high-voltage",
	});
}

export default Component;
