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
		"content": `<style>.t0z1_i10z {
  d: path("M15.25 13q.39 2.86 3.25 3.25q-2.86.39-3.25 3.25q-.39-2.86-3.25-3.25q2.86-.39 3.25-3.25Z");
}

.umx5fs4de {
  d: path("M4.25 5.25h15.5v16H4.25zm4.25 0v-2.5h7v2.5Zm-.75 5.25h5m-5 4h3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="umx5fs4de"/><path class="t0z1_i10z"/></g>`,
		"fallback": "iconoven:agent-planner-sharp",
	});
}

export default Component;
