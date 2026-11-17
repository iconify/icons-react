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
		"content": `<style>.b9u7nvbbq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 5h12A8.485 8.485 0 1 1 6 5m2 4h.01M12 9h.01M16 9h.01M10 14h.01M14 14h.01");
}
</style><path class="b9u7nvbbq"/>`,
		"fallback": "coolicons:ev-plug-sharp",
	});
}

export default Component;
