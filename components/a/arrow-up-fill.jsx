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
		"content": `<style>.cctdabcnh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 11.8771L11.5875 5.17385C11.8153 4.94205 12.1847 4.94205 12.4125 5.17385L19 11.8771M12 19V5.94129");
}
</style><path class="cctdabcnh"/>`,
		"fallback": "keyline-icons:arrow-up-fill",
	});
}

export default Component;
