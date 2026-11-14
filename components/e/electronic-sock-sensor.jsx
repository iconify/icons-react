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
		"content": `<style>.ms16xsbpg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5H13v11a5 5 0 0 1-5 5H5a2.5 2.5 0 0 1 0-5h1.5Zm0 4H13M15.5 21h.01m.598-3.447a3.5 3.5 0 0 1 2.839 2.839m-2.318-5.793a6.5 6.5 0 0 1 5.272 5.272");
}
</style><path class="ms16xsbpg"/>`,
		"fallback": "uix:electronic-sock-sensor",
	});
}

export default Component;
