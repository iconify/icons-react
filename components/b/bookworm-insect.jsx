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
		"content": `<style>.xa4d-jbqf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m21.353 16.487l.147.013V4Q16 3.5 12 5.5Q8 3.5 2.5 4v12.5Q8 16 12 18q.425-.213.867-.397m5.309-1.169q1.177-.068 2.435.001M12 5.5V18m2.5 2q1.75-2.5 3.5 0t3.5 0m0 0h.01");
}
</style><path class="xa4d-jbqf"/>`,
		"fallback": "uix-sharp:bookworm-insect",
	});
}

export default Component;
