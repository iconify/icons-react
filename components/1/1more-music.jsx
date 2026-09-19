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
		"content": `<style>.xpd24ibbb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.324 32.571V4.5L15.677 20.144c3.748-.51 6.82-.145 7.1 3.833V43.5");
}
</style><path class="xpd24ibbb"/>`,
		"fallback": "arcticons:1more-music",
	});
}

export default Component;
