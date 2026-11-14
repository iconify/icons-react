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
		"content": `<style>.xwl3o3iiw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 9.25l7.5-5.5l7.5 5.5m-15 5.5l7.5-5.5l7.5 5.5m-15 5.5l7.5-5.5l7.5 5.5");
}
</style><path class="xwl3o3iiw"/>`,
		"fallback": "uix-sharp:escalation-tier-3",
	});
}

export default Component;
