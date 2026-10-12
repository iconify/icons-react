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
		"content": `<style>.hdv5-jxat {
  d: path("M2.75 2.75h18.5v18.5H2.75zM5.5 17.5h13");
}

.pmf4mcnkp {
  d: path("M7 17.5v-6l5-4.25l5 4.25v6m-6.5 0V14h3v3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hdv5-jxat"/><path class="pmf4mcnkp"/></g>`,
		"fallback": "iconoven:elevation-drawing-sharp",
	});
}

export default Component;
