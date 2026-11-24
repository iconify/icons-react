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
		"content": `<style>.b-h7tvbfg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m8 20l-5 1l1-5a8.944 8.944 0 1 1 16-8m-3 8c-1-2-4-2-4 0s4 4 4 4s4-2 4-4s-3-2-4 0");
}

.ft5dv1b6b {
  fill: none;
}

.z0tmu1biv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 8v12l-5 1l1-5a8.945 8.945 0 0 1 16-8Zm9 8c1-2 4-2 4 0s-4 4-4 4s-4-2-4-4s3-2 4 0");
}
</style><g class="ft5dv1b6b"><path class="z0tmu1biv"/><path class="b-h7tvbfg"/></g>`,
		"fallback": "coolicons:chat-circle-heart-corner-duotone-sharp",
	});
}

export default Component;
