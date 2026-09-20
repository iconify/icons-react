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

.esl9iju3d {
  d: path("M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96m16 112l-64 32l32-64l64-32Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.in9uwmx8k {
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m44.42-143.16l-64 32a8.05 8.05 0 0 0-3.58 3.58l-32 64A8 8 0 0 0 80 184a8.1 8.1 0 0 0 3.58-.84l64-32a8.05 8.05 0 0 0 3.58-3.58l32-64a8 8 0 0 0-10.74-10.74M138 138l-40.11 20.11L118 118l40.15-20.07Z");
}
</style><g class="cuyn6tgcc"><path class="esl9iju3d"/><path class="in9uwmx8k"/></g>`,
		"fallback": "ph:compass-duotone",
	});
}

export default Component;
