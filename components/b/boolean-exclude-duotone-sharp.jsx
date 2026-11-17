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
		"content": `<style>.bj607i26y {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h12v6H9v6H3Zm6 18v-6h6V9h6v12Z");
}

.ft5dv1b6b {
  fill: none;
}

.hssqz14fh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h12v6H9v6H3zm12 6h6v12H9v-6h6z");
}
</style><g class="ft5dv1b6b"><path class="bj607i26y"/><path class="hssqz14fh"/></g>`,
		"fallback": "coolicons:boolean-exclude-duotone-sharp",
	});
}

export default Component;
