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
		"content": `<style>.ao_ai8bks {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m14 18l-4 2v-8L4 6V4h2l8 8ZM12 4h8v2l-3 3Z");
}

.ft5dv1b6b {
  fill: none;
}

.t490cnlbq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h8v2l-3 3m-3 3v6l-4 2v-8L4 6V4h2M4 2l14 14");
}
</style><g class="ft5dv1b6b"><path class="ao_ai8bks"/><path class="t490cnlbq"/></g>`,
		"fallback": "coolicons:filter-off-duotone-sharp",
	});
}

export default Component;
