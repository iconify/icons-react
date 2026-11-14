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
		"content": `<style>.wnndu_bmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c2.5 3 4 5 4 6.75a4 4 0 0 1-8 0C8 7.5 9.5 5.5 12 2.5m-7 19h14L17.5 16h-11Zm4.5-2.75h5");
}
</style><path class="wnndu_bmn"/>`,
		"fallback": "uix:burner-flame",
	});
}

export default Component;
