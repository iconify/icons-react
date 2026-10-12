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
		"content": `<style>.kf9g34vue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c1.4 1.4 2.25 2.65 2.25 3.75a2.25 2.25 0 0 1-4.5 0c0-1.1.85-2.35 2.25-3.75m.78 7.63l4.94 3.99q.78.63.06 1.32l-5.06 4.87q-.72.69-1.44 0l-5.06-4.87q-.72-.69.06-1.32l4.94-3.99q.78-.63 1.56 0M7 15h10m-5-4v9");
}
</style><path class="kf9g34vue"/>`,
		"fallback": "iconoven:attar-bottle",
	});
}

export default Component;
