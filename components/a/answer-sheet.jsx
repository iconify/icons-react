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
		"content": `<style>.balxitb0j {
  d: path("M7.75 8a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm0 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm0 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4.75-9h3m-3 4.5h3m-3 4.5h3");
}

.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="balxitb0j"/></g>`,
		"fallback": "uix-sharp:answer-sheet",
	});
}

export default Component;
