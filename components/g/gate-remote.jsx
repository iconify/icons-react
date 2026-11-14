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
		"content": `<style>.p8r2yeb8f {
  d: path("M6.75 13.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm0 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm6.358-12.197a3.5 3.5 0 0 1 2.839 2.839m-2.318-5.793a6.5 6.5 0 0 1 5.272 5.272");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wkxm9vnjj {
  d: path("M3.5 9h9v12.5h-9Z");
}
</style><g class="ulnmmdpxh"><path class="wkxm9vnjj"/><path class="p8r2yeb8f"/></g>`,
		"fallback": "uix-sharp:gate-remote",
	});
}

export default Component;
