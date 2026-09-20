import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.e3syoq5su {
  d: path("M232 48H16a8 8 0 0 0-8 8v152a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h112a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 128H24V64h208Zm-56-16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-24-40a23.74 23.74 0 0 1 2.35-10.34l32 32A23.74 23.74 0 0 1 176 144a24 24 0 0 1-24-24m48 0a23.74 23.74 0 0 1-2.35 10.34l-32-32A23.74 23.74 0 0 1 176 96a24 24 0 0 1 24 24M80 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-24-40a23.74 23.74 0 0 1 2.35-10.34l32 32A23.74 23.74 0 0 1 80 144a24 24 0 0 1-24-24m48 0a23.74 23.74 0 0 1-2.35 10.34l-32-32A23.74 23.74 0 0 1 80 96a24 24 0 0 1 24 24");
}

.v5khnyb7h {
  d: path("M232 56H16v128h216a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8M80 152a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="v5khnyb7h"/><path class="e3syoq5su"/></g>`,
		"fallback": "ph:graphics-card-duotone",
	});
}

export default Component;
