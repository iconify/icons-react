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
		"content": `<style>.xo8z2_blj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 12H6.9413M12.8771 5L6.1739 11.587C5.942 11.815 5.942 12.185 6.1739 12.413L12.8771 19M2 5V19");
}
</style><path class="xo8z2_blj"/>`,
		"fallback": "keyline-icons:arrow-left-to-line",
	});
}

export default Component;
