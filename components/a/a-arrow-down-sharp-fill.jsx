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
		"content": `<style>.lu8-uebmq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.9417 19.6637L7.1788 5L12.4158 19.6637M3.9645 14L10.3931 14M19 8L19 19M15.7071 15.7071L19 19L22.2929 15.7071");
}
</style><path class="lu8-uebmq"/>`,
		"fallback": "keyline-icons:a-arrow-down-sharp-fill",
	});
}

export default Component;
