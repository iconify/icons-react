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
		"content": `<style>.c_r2upbbc {
  d: path("M48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.22-4.66a8 8 0 0 1 11.56 11.06A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.18 14.18 0 0 0 64 160c-8.82 0-16 9-16 20m-8-68V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.69L160 51.31Zm-12 92h-12v-12a8 8 0 0 0-16 0v12h-12a8 8 0 0 0 0 16h12v12a8 8 0 0 0 16 0v-12h12a8 8 0 0 0 0-16m68 0h-12v-12a8 8 0 0 0-16 0v12h-12a8 8 0 0 0 0 16h12v12a8 8 0 0 0 16 0v-12h12a8 8 0 0 0 0-16");
}

.cuyn6tgcc {
  fill: currentColor;
}

.nvjq80alh {
  d: path("M208 88h-56V32Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="nvjq80alh"/><path class="c_r2upbbc"/></g>`,
		"fallback": "ph:file-cpp-duotone",
	});
}

export default Component;
