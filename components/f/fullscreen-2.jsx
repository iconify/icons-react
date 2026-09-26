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
		"content": `<style>.dseb0nhyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 3H20.5C20.77614 3 21 3.22386 21 3.5V10M10 21H3.5C3.22386 21 3 20.77614 3 20.5V14");
}
</style><path class="dseb0nhyt"/>`,
		"fallback": "keyline-icons:fullscreen-2",
	});
}

export default Component;
