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
		"content": `<style>.b51oo275q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 4l4 6l5-4l-1.701 9.358A2 2 0 0 1 17.33 17H6.669a2 2 0 0 1-1.968-1.642L3 6l5 4zM5 21h14");
}
</style><path class="b51oo275q"/>`,
		"fallback": "coolicons:crown",
	});
}

export default Component;
