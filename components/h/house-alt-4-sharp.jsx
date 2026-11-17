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
		"content": `<style>.oxxjqwb_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 11l9-8l9 8m-2-1.778V21H5V9.222M12 9l3 2.667V17H9v-5.333z");
}
</style><path class="oxxjqwb_f"/>`,
		"fallback": "coolicons:house-alt-4-sharp",
	});
}

export default Component;
