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
		"content": `<style>.mygkryb2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 17c-1.425.797-3.297 1-5 1a9.75 9.75 0 0 1-9-6c.859-2.061 2.132-3.955 4-5m5-1a9.75 9.75 0 0 1 9 6c-.288.69-.576 1.408-1 2m-9-3c-.362.362-1 .448-1 1a2 2 0 0 0 2 2c.552 0 .638-.638 1-1M2 2l20 20");
}
</style><path class="mygkryb2r"/>`,
		"fallback": "coolicons:eye-off-sharp",
	});
}

export default Component;
