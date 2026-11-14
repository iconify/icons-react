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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wizf-ubov {
  d: path("M4.5 10.5a7.5 7.5 0 0 1 15 0m-17 0h4v7h-4Zm15 0h4v7h-4Z");
}

.z0entdbcr {
  d: path("M8.75 7.25a4.75 4.75 0 0 1 6.5 0M12 5.75V21m-4.5 0h9");
}
</style><g class="ulnmmdpxh"><path class="wizf-ubov"/><path class="z0entdbcr"/></g>`,
		"fallback": "uix-sharp:headset-stand",
	});
}

export default Component;
