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
		"content": `<style>.tfrlw2b7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.25V13.5m-7.25 0h14.5m-14.5 0V3.25m14.5 10.25V3.25M9.13 9.01a3.6 2.1-40 1 1 5.74-4.02a3.6 2.1-40 1 1-5.74 4.02");
}
</style><path class="tfrlw2b7d"/>`,
		"fallback": "iconoven:american-football",
	});
}

export default Component;
