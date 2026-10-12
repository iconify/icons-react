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
		"content": `<style>.l5lwe402e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.25v8h18.5v-8m-14-9.5v13.5m9.5-13.5v13.5M12 3.75v13.5");
}
</style><path class="l5lwe402e"/>`,
		"fallback": "iconoven:batch-size-sharp",
	});
}

export default Component;
