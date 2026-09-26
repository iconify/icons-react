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
		"content": `<style>.j0g7uzbot {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 2L12 2C6.4771 2 2 6.4771 2 12C2 17.5228 6.4771 22 12 22C17.5228 22 22 17.5228 22 12L22 11M10.5 13.5L14.6248 11.8501L20.4874 5.9874C21.1709 5.304 21.1709 4.196 20.4874 3.5126C19.804 2.8291 18.696 2.8291 18.0126 3.5126L12.1499 9.3752L10.5 13.5Z");
}
</style><path class="j0g7uzbot"/>`,
		"fallback": "keyline-icons:circle-pen-sharp",
	});
}

export default Component;
