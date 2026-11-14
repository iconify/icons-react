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
		"content": `<style>.a9hwqhtnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8a7.5 7.5 0 0 0 15 0M8 8a4 4 0 0 0 8 0m-4 0v12.5m-4.5 0h9M4.5 5h.01M8 5h.01M12 5h.01M16 5h.01m3.49 0h.01");
}
</style><path class="a9hwqhtnp"/>`,
		"fallback": "uix:hanukkah-menorah",
	});
}

export default Component;
