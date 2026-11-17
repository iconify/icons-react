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
		"content": `<style>.f__g6fbmx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m7 11l4-4a4.243 4.243 0 0 1 6 6l-4 4zm1 1l-4 4c-.64.64-1 1.36-1 2v1a1 1 0 0 0 1 1h3c.64 0 1.36-.36 2-1l3-3");
}

.ft5dv1b6b {
  fill: none;
}

.gm03nub6z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m7 11l4-4a4.242 4.242 0 1 1 6 6l-4 4Z");
}
</style><g class="ft5dv1b6b"><path class="gm03nub6z"/><path class="f__g6fbmx"/></g>`,
		"fallback": "coolicons:highlighter-duotone-round",
	});
}

export default Component;
