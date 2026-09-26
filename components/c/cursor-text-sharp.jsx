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
		"content": `<style>.ajs828bnr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 3.5L13.9583 3.5M2 8.1006L6.9875 8.1006M2 12.7011L6.9875 12.7011M9.9707 9.1229L13.7632 20.5L16.4121 15.5744L21 13.2205L9.9707 9.1229Z");
}
</style><path class="ajs828bnr"/>`,
		"fallback": "keyline-icons:cursor-text-sharp",
	});
}

export default Component;
