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

.n46yt4b1s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 3c.265 0 .52.105.707.293L12.414 5H19a1 1 0 0 1 1 1v4h1a1.002 1.002 0 0 1 .949 1.316l-3 9A1 1 0 0 1 18 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z");
}
</style><g class="ft5dv1b6b"><path class="n46yt4b1s"/><path class="b7801cbfx"/></g>`,
		"fallback": "coolicons:folder-open-duotone-sharp",
	});
}

export default Component;
