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

.tu0cx0btk {
  d: path("M172 76a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44m-44 28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m60 24a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28M68 128a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28");
}

.x13iog92h {
  d: path("M128 112a36 36 0 1 1 36-36a36 36 0 0 1-36 36m60 24a36 36 0 1 0 36 36a36 36 0 0 0-36-36m-120 0a36 36 0 1 0 36 36a36 36 0 0 0-36-36");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="x13iog92h"/><path class="tu0cx0btk"/></g>`,
		"fallback": "ph:circles-three-duotone",
	});
}

export default Component;
