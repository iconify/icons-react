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
		"content": `<style>.fy3uccb7z {
  d: path("M9.25 3.5C6.75 2.75 5.5 4.75 6.5 7.25m8.25-3.75c2.5-.75 3.75 1.25 2.75 3.75M12 7h.01");
}

.nob-zobpu {
  d: path("M9.75 9H9a2 2 0 0 0-2 2v7.5h10V11a2 2 0 0 0-2-2h-.75");
}

.ojgy6j2ar {
  d: path("M4 14v5.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V14");
}

.u1_g7npxx {
  d: path("M8.25 6a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ojgy6j2ar"/><path class="nob-zobpu"/><path class="u1_g7npxx"/><path class="fy3uccb7z"/></g>`,
		"fallback": "uix-sharp:car-seat-pet",
	});
}

export default Component;
