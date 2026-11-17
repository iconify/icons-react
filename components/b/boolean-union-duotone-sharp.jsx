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
		"content": `<style>.e9mgouj-n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h12v6h6v12H9v-6H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.lqrqf8tna {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h12v6h6v12H9v-6H3z");
}
</style><g class="ft5dv1b6b"><path class="e9mgouj-n"/><path class="lqrqf8tna"/></g>`,
		"fallback": "coolicons:boolean-union-duotone-sharp",
	});
}

export default Component;
