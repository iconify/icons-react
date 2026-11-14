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
		"content": `<style>.oyyeq5b6a {
  d: path("M6.5 9.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm11 0v7m-1.5 0h3l-.75 4.5h-1.5Zm-5.5-7h.01");
}

.q6epnvzpy {
  d: path("M3.5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q6epnvzpy"/><path class="oyyeq5b6a"/></g>`,
		"fallback": "uix-sharp:fire-hose-reel",
	});
}

export default Component;
