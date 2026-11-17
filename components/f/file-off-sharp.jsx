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
		"content": `<style>.nl8gh9jlw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H7M5 7v14h14m0-6V9m-6-6l6 6m-6-6v6h6M2 4l18 18");
}
</style><path class="nl8gh9jlw"/>`,
		"fallback": "coolicons:file-off-sharp",
	});
}

export default Component;
