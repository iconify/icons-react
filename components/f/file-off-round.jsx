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
		"content": `<style>.s4q9frk9c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H9c-.587 0-1.144.126-1.646.353M5 7v10a4 4 0 0 0 4 4h6a4 4 0 0 0 2.828-1.172M19 15V9m-6-6l6 6m-6-6v4a2 2 0 0 0 2 2h4M2 4l18 18");
}
</style><path class="s4q9frk9c"/>`,
		"fallback": "coolicons:file-off-round",
	});
}

export default Component;
