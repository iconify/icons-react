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
		"content": `<style>.s0jewabsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.125 7h3.75A2.625 2.625 0 0 1 16.5 9.625v4.75A2.625 2.625 0 0 1 13.875 17h-3.75A2.625 2.625 0 0 1 7.5 14.375v-4.75A2.625 2.625 0 0 1 10.125 7M2.5 12h5m9 0h5M12 9.75v4.5M2.5 9.5v5m19-5v5");
}
</style><path class="s0jewabsn"/>`,
		"fallback": "uix:crossfader",
	});
}

export default Component;
