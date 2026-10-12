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
		"content": `<style>.dk0cgtklm {
  d: path("M2.75 6h18.5m-17-2.75h2v5.5h-2zm13.5 0h2v5.5h-2z");
}

.hniznjo0b {
  d: path("M7.5 12.5h7m-5.5 0V6m5.5 6.5l3.5 2v6.75M4.75 16h11M6.5 16v5.25");
}

.mf93ukbgu {
  cx: 5px;
  cy: 12.25px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dk0cgtklm"/><circle class="mf93ukbgu"/><path class="hniznjo0b"/></g>`,
		"fallback": "iconoven:bench-press-sharp",
	});
}

export default Component;
