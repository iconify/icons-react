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
		"content": `<style>.udl40_bpm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h18.5v6.5H2.75zM6.25 8h11.5m-12 3.25v6.5m6.25-6.5v6.5m6.25-6.5v6.5M2.75 20.5h4m3.25 0h4m3.25 0h4");
}
</style><path class="udl40_bpm"/>`,
		"fallback": "iconoven:guardrails-sharp",
	});
}

export default Component;
