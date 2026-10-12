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
		"content": `<style>.nt2wcybkc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 5.5c-3.9 0-7 2.9-7 6.5s3.1 6.5 7 6.5c1 0 1.75-.6 1.75-1.6V7.1c0-1-.75-1.6-1.75-1.6m-2.5 4v5m7.55-7.8l3.01-3.01m-1.38 5.44l3.93-1.63M17 12h4.25m-4.82 2.87l3.93 1.63m-5.56.8l3.01 3.01");
}
</style><path class="nt2wcybkc"/>`,
		"fallback": "iconoven:daytime-running-lights",
	});
}

export default Component;
