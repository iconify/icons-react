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
		"content": `<style>.x4vlkgbjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4.264C11.2804 3.8481 10.3605 3.9168 9.7072 4.4703L2.7072 10.4009C2.2586 10.7809 2 11.339 2 11.9268L2 20C2 21.1046 2.8954 22 4 22L18 22C19.1046 22 20 21.1046 20 20L20 12M8 22L8 15L14 15L14 22M16 2L22 8M22 2L16 8");
}
</style><path class="x4vlkgbjk"/>`,
		"fallback": "keyline-icons:home-x",
	});
}

export default Component;
