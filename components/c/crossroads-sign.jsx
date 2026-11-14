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
		"content": `<style>.nsvqgkbdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.856 3.856l3.788 3.788a2.625 2.625 0 0 1 0 3.712l-3.788 3.788a2.625 2.625 0 0 1-3.712 0l-3.788-3.788a2.625 2.625 0 0 1 0-3.712l3.788-3.788a2.625 2.625 0 0 1 3.712 0M12 17v5m0-16v7M8.5 9.5h7");
}
</style><path class="nsvqgkbdb"/>`,
		"fallback": "uix:crossroads-sign",
	});
}

export default Component;
