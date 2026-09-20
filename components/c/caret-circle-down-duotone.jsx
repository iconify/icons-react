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

.goeug6bgp {
  d: path("M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z4swriete {
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m45.66-109.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L128 140.69l34.34-34.35a8 8 0 0 1 11.32 0");
}
</style><g class="cuyn6tgcc"><path class="goeug6bgp"/><path class="z4swriete"/></g>`,
		"fallback": "ph:caret-circle-down-duotone",
	});
}

export default Component;
