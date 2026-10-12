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
		"content": `<style>.u1nac14xb {
  d: path("M8.75 9.75h6.5v5h-6.5zM10 18h4");
}

.vx64dqb8q {
  d: path("M15 7.25v-4.5m-8.75 4.5h11.5v14H6.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vx64dqb8q"/><path class="u1nac14xb"/></g>`,
		"fallback": "iconoven:baby-monitor-off-sharp",
	});
}

export default Component;
