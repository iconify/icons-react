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

.i-0o5ib_e {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4h18v4H3Zm2 4v12h14V8m-4 6l-3-3l-3 3m3-3v6");
}

.vkjb21b8v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 4h18v4H3Z");
}
</style><g class="ft5dv1b6b"><path class="vkjb21b8v"/><path class="i-0o5ib_e"/></g>`,
		"fallback": "coolicons:archive-restore-duotone-sharp",
	});
}

export default Component;
