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
		"content": `<style>.pfjrdkbbn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 12L5.2698 12M12.1711 4.7008L5 12L12.1711 19.2992");
}
</style><path class="pfjrdkbbn"/>`,
		"fallback": "keyline-icons:arrow-left-sharp-fill",
	});
}

export default Component;
