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
		"content": `<style>.hg_qa-8dv {
  d: path("M2.5 16.5V8A2.5 2.5 0 0 1 5 5.5h7.5A2.5 2.5 0 0 1 15 8v8.5Z");
}

.rhmo8vbfx {
  d: path("M5.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9.5-12l6.5 3v11m-16-12h4v3h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hg_qa-8dv"/><path class="rhmo8vbfx"/></g>`,
		"fallback": "uix-sharp:caravan-dealer",
	});
}

export default Component;
