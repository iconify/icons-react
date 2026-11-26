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
		"content": `<style>.iip9skb0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 4L4 6V15.5C4 16.3284 4.6716 17 5.5 17H17.5C18.3284 17 19 16.3284 19 15.5V14.5135C19 13.5617 18.5671 12.6418 17.7886 12.0941C16.4131 11.1263 14.3296 10 11 10V2M7 17V22M14 17V22M3 22H19C20.1046 22 21 21.1046 21 20");
}
</style><path class="iip9skb0l"/>`,
		"fallback": "keyline-icons:ice-skate",
	});
}

export default Component;
