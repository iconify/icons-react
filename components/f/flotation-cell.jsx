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
		"content": `<style>.grtnufnem {
  d: path("M9.75 5.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.m4tjs_b3s {
  d: path("M3 8v10.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8M3 12h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vmkq9yz7k {
  d: path("M7.5 9.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="m4tjs_b3s"/><path class="vmkq9yz7k"/><path class="grtnufnem"/></g>`,
		"fallback": "uix-sharp:flotation-cell",
	});
}

export default Component;
