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
		"content": `<style>.cwub_bbwr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 12v8l-5 1l1-5a8.945 8.945 0 0 1 16-8h-8a4 4 0 0 0-4 4m5 9v-3l5-5l3 3l-5 5Z");
}

.ft5dv1b6b {
  fill: none;
}

.n5pryla1x {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m8 20l-5 1l1-5a8.944 8.944 0 1 1 16-8m-7 13v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="cwub_bbwr"/><path class="n5pryla1x"/></g>`,
		"fallback": "coolicons:chat-circle-edit-corner-duotone-round",
	});
}

export default Component;
