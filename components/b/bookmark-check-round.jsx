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
		"content": `<style>.bcnkzfaxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h2a4 4 0 0 1 4 4v10c0 .855-1.718.855-3 0l-3-2l-3 2c-1.282.855-3 .855-3 0V8a4 4 0 0 1 4-4zm-3 6l2 2l4-4");
}
</style><path class="bcnkzfaxo"/>`,
		"fallback": "coolicons:bookmark-check-round",
	});
}

export default Component;
