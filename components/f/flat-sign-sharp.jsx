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
		"content": `<style>.k8qc1epoy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 2.75V20.5m0-7.25c1.9-1.85 3.7-3 5.6-3c1.95 0 3.4 1.2 3.4 3.1c0 3.35-4.75 5.55-9 7.15");
}
</style><path class="k8qc1epoy"/>`,
		"fallback": "iconoven:flat-sign-sharp",
	});
}

export default Component;
