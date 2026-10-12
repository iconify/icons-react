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
		"content": `<style>.fxwnb7vgp {
  cx: 5px;
  cy: 19px;
  r: 2px;
}

.hspgb-b5j {
  d: path("m12 12l2.5-2.5");
}

.ug1uahwej {
  d: path("m8.23 12.23l7.5-7.5a2.5 2.5 0 0 1 3.54 3.54l-7.5 7.5a2.5 2.5 0 0 1-3.54-3.54Zm0 3.54l-1.82 1.82");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ug1uahwej"/><circle class="fxwnb7vgp"/><path class="hspgb-b5j"/></g>`,
		"fallback": "iconoven:baby-thermometer-sharp",
	});
}

export default Component;
