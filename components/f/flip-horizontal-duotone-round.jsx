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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.ji6b9qbdp {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12V9c0-.738.631-1.369 1-1l3 3a1.414 1.414 0 0 1 0 2l-3 3c-.369.369-1-.262-1-1zm9-7v2m0 4v2m0 4v2m9-7V9c0-.738-.631-1.369-1-1l-3 3a1.414 1.414 0 0 0 0 2l3 3c.369.369 1-.262 1-1z");
}

.n5ta5ibsl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 15V9c0-.738.631-1.369 1-1l3 3a1.415 1.415 0 0 1 0 2l-3 3c-.369.369-1-.262-1-1m18 0c0 .738-.631 1.369-1 1l-3-3a1.415 1.415 0 0 1 0-2l3-3c.369-.369 1 .262 1 1Z");
}
</style><g class="ft5dv1b6b"><path class="n5ta5ibsl"/><path class="ji6b9qbdp"/></g>`,
		"fallback": "coolicons:flip-horizontal-duotone-round",
	});
}

export default Component;
