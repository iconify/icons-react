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
		"content": `<style>.qib4jnbcj {
  fill: currentColor;
  d: path("M16 12L9 2L2 12h1.86L0 18h7v4h4v-4h7l-3.86-6z");
}

.u-pddjbzr {
  fill: currentColor;
  d: path("M20.14 12H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z");
}
</style><path class="qib4jnbcj"/><path class="u-pddjbzr"/>`,
		"fallback": "ic:baseline-forest",
	});
}

export default Component;
