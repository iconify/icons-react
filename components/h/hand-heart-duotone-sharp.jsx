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

.ildf9hb3v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 16l3-3c.6-.6 1.2-1 2-1h3a2 2 0 1 1 0 4h-2m4-2l3-3a2.121 2.121 0 1 1 3 3l-5 5c-.64.64-1.36 1-2 1H8m-5-5l6 6m3-17c-2-2-5 0-3 2l3 3l3-3c2-2-1-4-3-2");
}

.s475js2lz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 9L9 6c-2-2 1-4 3-2c2-2 5 0 3 2Zm-5 4c.559-.559 1.178-1 2-1h3a2 2 0 0 1 2 2l3-3a2.122 2.122 0 0 1 3 3l-5 5c-.521.52-1.237 1-2 1H8l-4-4Z");
}
</style><g class="ft5dv1b6b"><path class="s475js2lz"/><path class="ildf9hb3v"/></g>`,
		"fallback": "coolicons:hand-heart-duotone-sharp",
	});
}

export default Component;
