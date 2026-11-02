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
		"content": `<style>.mtevnmbvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12V9c0-.738.631-1.369 1-1l3 3a1.414 1.414 0 0 1 0 2l-3 3c-.369.369-1-.262-1-1zm9-7v2m0 4v2m0 4v2m9-7V9c0-.738-.631-1.369-1-1l-3 3a1.414 1.414 0 0 0 0 2l3 3c.369.369 1-.262 1-1z");
}
</style><path class="mtevnmbvl"/>`,
		"fallback": "coolicons:flip-horizontal-round",
	});
}

export default Component;
