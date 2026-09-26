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
		"content": `<style>.t2-qd9uti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 3H20.5C20.77614 3 21 3.22386 21 3.5V10M14 10L20.4 3.6M10 21H3.5C3.22386 21 3 20.77614 3 20.5V14M10 14L3.6 20.4");
}
</style><path class="t2-qd9uti"/>`,
		"fallback": "keyline-icons:fullscreen-fill",
	});
}

export default Component;
