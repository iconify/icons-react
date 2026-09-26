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
		"content": `<style>.yycddsb3a {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 22L6 9M13.1465 6L18 6L18 13M15.0858 3.7071L12.7929 6L15.0858 8.2929M18.5 15L18.5 22M15 18.5L22 18.5M6 3C7.6569 3 9 4.3431 9 6C9 7.6569 7.6569 9 6 9C4.3431 9 3 7.6569 3 6C3 4.3431 4.3431 3 6 3Z");
}
</style><path class="yycddsb3a"/>`,
		"fallback": "keyline-icons:git-pull-request-create-arrow-sharp",
	});
}

export default Component;
