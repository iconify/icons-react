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
		"content": `<style>.yohh9cbxv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.5858 5.5858C14.3668 4.8047 15.6332 4.8047 16.4142 5.5858L21.4142 10.5858C22.1953 11.3668 22.1953 12.6332 21.4142 13.4142L16.4142 18.4142C15.6332 19.1953 14.3668 19.1953 13.5858 18.4142L8.5858 13.4142C7.8047 12.6332 7.8047 11.3668 8.5858 10.5858ZM8.4153 18.9126C8.1021 18.8169 7.8173 18.6457 7.5858 18.4142L2.5858 13.4142C1.8047 12.6332 1.8047 11.3668 2.5858 10.5858L7.5858 5.5858C7.8173 5.3543 8.1021 5.1831 8.4153 5.0874");
}
</style><path class="yohh9cbxv"/>`,
		"fallback": "keyline-icons:diamonds",
	});
}

export default Component;
