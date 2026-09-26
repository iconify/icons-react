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
		"content": `<style>.abn7u8b5a {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 2L3 21L22 21M7 7C8.09091 9.8125 12.0182 15.55 19 16");
}
</style><path class="abn7u8b5a"/>`,
		"fallback": "keyline-icons:chart-line-decreasing-sharp",
	});
}

export default Component;
