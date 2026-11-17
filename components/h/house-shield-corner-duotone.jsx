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
		"content": `<style>.egcg7pbhp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 8a2 2 0 0 0-2 2v11H6a2 2 0 0 1-2-2v-8.092c0-.577.249-1.126.683-1.506l6-5.25a2 2 0 0 1 2.634 0L17.714 8Zm4 5h6a1 1 0 0 1 1 1v2c-.002 2.649-1.701 4.08-4 5c-2.299-.92-3.998-2.351-4-5v-2a1 1 0 0 1 1-1");
}

.ft5dv1b6b {
  fill: none;
}

.g73d0yk3s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21H6a2 2 0 0 1-2-2v-8.092a2 2 0 0 1 .683-1.506l6-5.25a2 2 0 0 1 2.634 0L17.714 8M17 13h3a1 1 0 0 1 1 1v2c0 2.5-1.5 4-4 5c-2.5-1-4-2.5-4-5v-2a1 1 0 0 1 1-1z");
}
</style><g class="ft5dv1b6b"><path class="egcg7pbhp"/><path class="g73d0yk3s"/></g>`,
		"fallback": "coolicons:house-shield-corner-duotone",
	});
}

export default Component;
