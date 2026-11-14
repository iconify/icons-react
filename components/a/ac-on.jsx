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
		"content": `<style>.erhekbbaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v9h-19ZM6 10h12M7.5 16l-1 4.5M12 16v4.5m4.5-4.5l1 4.5");
}
</style><path class="erhekbbaw"/>`,
		"fallback": "uix-sharp:ac-on",
	});
}

export default Component;
