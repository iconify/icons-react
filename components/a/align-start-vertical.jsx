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
		"content": `<style>.l-7nvhk5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 2V22M6 6V8C6 9.105 6.8954 10 8 10H12C13.1046 10 14 9.105 14 8V6C14 4.895 13.1046 4 12 4H8C6.8954 4 6 4.895 6 6ZM6 16V18C6 19.105 6.8954 20 8 20H20C21.1046 20 22 19.105 22 18V16C22 14.895 21.1046 14 20 14H8C6.8954 14 6 14.895 6 16Z");
}
</style><path class="l-7nvhk5b"/>`,
		"fallback": "keyline-icons:align-start-vertical",
	});
}

export default Component;
