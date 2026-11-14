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
		"content": `<style>.wxyl7l_rw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11A3.5 3.5 0 0 1 6.5 3m1 0v18M12 3v18m4.5-18v18M3 7.5h18M3 12h18M3 16.5h18M9.75 5.25h.01m8.99 4.5h.01m-13.51 4.5h.01m8.99 4.5h.01");
}
</style><path class="wxyl7l_rw"/>`,
		"fallback": "uix:beat-grid",
	});
}

export default Component;
