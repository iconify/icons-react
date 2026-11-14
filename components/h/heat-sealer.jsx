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
		"content": `<style>.vhrdf4sqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3h14.5A1.75 1.75 0 0 1 21 4.75v.5A1.75 1.75 0 0 1 19.25 7H4.75A1.75 1.75 0 0 1 3 5.25v-.5A1.75 1.75 0 0 1 4.75 3m.75 4l-1 12.5A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5L18.5 7m-10-4v4M12 3v4m3.5-4v4");
}
</style><path class="vhrdf4sqd"/>`,
		"fallback": "uix:heat-sealer",
	});
}

export default Component;
