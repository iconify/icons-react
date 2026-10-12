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
		"content": `<style>.bh4biibbp {
  d: path("M4.75 2.75h14.5v18.5H4.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yhvvwwbqz {
  d: path("m12.61 7.29l3.03 3.92l.61.79l-.61.79l-3.03 3.92l-.61.79l-.61-.79l-3.03-3.92l-.61-.79l.61-.79l3.03-3.92l.61-.79z");
}
</style><g class="x2cwu0gfd"><path class="bh4biibbp"/><path class="yhvvwwbqz"/></g>`,
		"fallback": "iconoven:card-diamond-sharp",
	});
}

export default Component;
