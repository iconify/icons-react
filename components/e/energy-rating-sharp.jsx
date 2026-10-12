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
		"content": `<style>.owikbrb6w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.35 3h4.9l.42.42l.53.53l.43.43l-.43.42l-.53.53l-.42.42h-5.5V3zm0 5h6.9l.42.42l.53.53l.43.43l-.43.42l-.53.53l-.42.42h-7.5V8zm0 5h8.9l.42.42l.53.53l.43.43l-.43.42l-.53.53l-.42.42h-9.5V13zm0 5h10.9l.42.42l.53.53l.43.43l-.43.42l-.53.53l-.42.42H2.75V18zM14.8 8.87l1.65-1.49l.55-.5h4.25v5H17l-.55-.51l-1.65-1.49l-.55-.5z");
}
</style><path class="owikbrb6w"/>`,
		"fallback": "iconoven:energy-rating-sharp",
	});
}

export default Component;
