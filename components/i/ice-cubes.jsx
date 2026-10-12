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
		"content": `<style>.r9vns5b2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.49 13.05l4.52-.6q1.49-.2 1.69 1.29l.6 4.52q.2 1.49-1.29 1.69l-4.52.6q-1.49.2-1.69-1.29l-.6-4.52q-.2-1.49 1.29-1.69m10.98-9.74l4.06.88q1.47.31 1.16 1.78l-.88 4.06q-.31 1.47-1.78 1.16l-4.06-.88Q12.5 10 12.81 8.53l.88-4.06Q14 3 15.47 3.31");
}
</style><path class="r9vns5b2i"/>`,
		"fallback": "iconoven:ice-cubes",
	});
}

export default Component;
