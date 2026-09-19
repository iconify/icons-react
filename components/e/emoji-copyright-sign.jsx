import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.juv8kgbgn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.495 19.313C32.7 15.3 28.68 12.5 24 12.5c-6.351 0-11.5 5.149-11.5 11.5S17.649 35.5 24 35.5c4.68 0 8.7-2.8 10.495-6.813");
}

.l6cd208_p {
  cx: 24px;
  cy: 24px;
  r: 18.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="l6cd208_p"/><path class="juv8kgbgn"/>`,
		"fallback": "arcticons:emoji-copyright-sign",
	});
}

export default Component;
