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
		"content": `<style>.b7801cbfx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5 20l3-9h13l-3 9zm14-9V6h-7l-2-2H3v16h2");
}

.ft5dv1b6b {
  fill: none;
}

.qi2zjp3lx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 4h7l2 2h7v5h2l-3 9H3Z");
}
</style><g class="ft5dv1b6b"><path class="qi2zjp3lx"/><path class="b7801cbfx"/></g>`,
		"fallback": "coolicons:folder-open-duotone-sharp",
	});
}

export default Component;
