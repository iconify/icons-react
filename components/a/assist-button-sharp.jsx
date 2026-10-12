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

.fq1tmw63v {
  cx: 12px;
  cy: 10.5px;
  r: 4px;
}

.hboedzb0t {
  d: path("M9 17.75h6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bh4biibbp"/><circle class="fq1tmw63v"/><path class="hboedzb0t"/></g>`,
		"fallback": "iconoven:assist-button-sharp",
	});
}

export default Component;
