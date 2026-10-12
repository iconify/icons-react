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
		"content": `<style>.daysyia5e {
  d: path("m4.22 10.12l1.31-2.49l.47-.88h12l.47.88l1.31 2.49l.47.88H3.75zM2.75 13.5h18.5v7.75H2.75z");
}

.sj7-tib_b {
  d: path("M5.25 16h13.5v2.75H5.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="daysyia5e"/><path class="sj7-tib_b"/></g>`,
		"fallback": "iconoven:ink-pad-sharp",
	});
}

export default Component;
