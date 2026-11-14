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
		"content": `<style>.sn8kwkfal {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14h5.5v-2.5h7V14H21M3 19.5h5.5v2h7v-2H21m-18-7V21m18-8.5V21M12 7.5v4M7 5a5 2.5 0 1 0 10 0A5 2.5 0 1 0 7 5Z");
}
</style><path class="sn8kwkfal"/>`,
		"fallback": "uix-sharp:gate-valve",
	});
}

export default Component;
