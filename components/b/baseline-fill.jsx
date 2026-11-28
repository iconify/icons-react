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
		"content": `<style>.indabq3mq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 17L11.065 3.6454C11.3914 2.7849 12.6086 2.7849 12.935 3.6454L18 17M7.5171 13H16.4829M3 21H21");
}
</style><path class="indabq3mq"/>`,
		"fallback": "keyline-icons:baseline-fill",
	});
}

export default Component;
