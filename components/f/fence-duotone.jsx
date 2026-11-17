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

.j3xrkxb7y {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 21V7l1.553-3.106a.5.5 0 0 1 .894 0L9 7v14zm10 0V7l1.553-3.106a.5.5 0 0 1 .894 0L19 7v14zM3 10h2m4 0h6m4 0h2M3 16h2m4 0h6m4 0h2");
}

.wdkmecclg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 21V7l1.553-3.106a.5.5 0 0 1 .894 0L9 7v14Zm10 0V7l1.553-3.106a.5.5 0 0 1 .894 0L19 7v14Z");
}
</style><g class="ft5dv1b6b"><path class="wdkmecclg"/><path class="j3xrkxb7y"/></g>`,
		"fallback": "coolicons:fence-duotone",
	});
}

export default Component;
