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
		"content": `<style>.kxaphk29p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 12C22 17.5228 17.5228 22 12 22C6.4772 22 2 17.5228 2 12C2 6.4772 6.4772 2 12 2C17.5228 2 22 6.4772 22 12ZM12 2L12 22M2 12L22 12M4.8586 5C6.2543 7.0677 7 9.5054 7 12C7 14.4946 6.2543 16.9323 4.8586 19M19.1414 5C17.7457 7.0677 17 9.5054 17 12C17 14.4946 17.7457 16.9323 19.1414 19");
}
</style><path class="kxaphk29p"/>`,
		"fallback": "keyline-icons:basketball",
	});
}

export default Component;
