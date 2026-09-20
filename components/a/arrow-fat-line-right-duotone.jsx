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

.d0rpw2w8k {
  d: path("M136 224v-48H72V80h64V32l96 96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s9yzyavfp {
  d: path("m237.66 122.34l-96-96A8 8 0 0 0 128 32v40H72a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h56v40a8 8 0 0 0 13.66 5.66l96-96a8 8 0 0 0 0-11.32M144 204.69V176a8 8 0 0 0-8-8H80V88h56a8 8 0 0 0 8-8V51.31L220.69 128ZM48 80v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0");
}
</style><g class="cuyn6tgcc"><path class="d0rpw2w8k"/><path class="s9yzyavfp"/></g>`,
		"fallback": "ph:arrow-fat-line-right-duotone",
	});
}

export default Component;
