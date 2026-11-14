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
		"content": `<style>.v4y7zi_hr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 18V5l2-2l2 2l2-2l2 2l2-2l2 2v13M8.25 18h11.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H8.25a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 8.25 18M12 5v13m4-13v13M2.5 7l2.75 2M2.5 11.5l2.75 2");
}
</style><path class="v4y7zi_hr"/>`,
		"fallback": "uix:blast-fence",
	});
}

export default Component;
