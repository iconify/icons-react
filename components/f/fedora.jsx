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
		"content": `<style>.sykgjy-5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 14l1-6.5c.3-1.5 1.5-2 4-1c2.5-1 3.7-.5 4 1l1 6.5Zm-4.5 1.25C4 14 6 14 7 14h10c1 0 3 0 4.5 1.25c-2.5 1.5-16.5 1.5-19 0Zm4.75-3h9.5M12 6.5v2.75");
}
</style><path class="sykgjy-5y"/>`,
		"fallback": "uix-sharp:fedora",
	});
}

export default Component;
