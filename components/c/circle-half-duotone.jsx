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

.ozc1pbbxv {
  d: path("M224 128a96 96 0 0 1-96 96V32a96 96 0 0 1 96 96");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vvzt2t89y {
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88.11 88.11 0 0 1 80-87.63v175.26A88.11 88.11 0 0 1 40 128m96 87.63V40.37a88 88 0 0 1 0 175.26");
}
</style><g class="cuyn6tgcc"><path class="ozc1pbbxv"/><path class="vvzt2t89y"/></g>`,
		"fallback": "ph:circle-half-duotone",
	});
}

export default Component;
