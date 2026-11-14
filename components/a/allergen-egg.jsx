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
		"content": `<style>.omku48b7y {
  d: path("M12 6.75c2.6 0 4.25 3.65 4.25 6.25S14.4 17.25 12 17.25S7.75 15.6 7.75 13S9.4 6.75 12 6.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="omku48b7y"/></g>`,
		"fallback": "uix-sharp:allergen-egg",
	});
}

export default Component;
