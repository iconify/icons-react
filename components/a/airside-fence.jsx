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
		"content": `<style>.dl8_sfbtx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21V6l1.5-2L6 6v15m4.5 0V6L12 4l1.5 2v15m4.5 0V6l1.5-2L21 6v15M6 9.5h4.5m-4.5 6h4.5");
}
</style><path class="dl8_sfbtx"/>`,
		"fallback": "uix:airside-fence",
	});
}

export default Component;
