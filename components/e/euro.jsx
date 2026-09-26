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
		"content": `<style>.c14t5ib6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 20C19.269 21.2982 17.1637 22 15 22C9.4772 22 5 17.5228 5 12C5 6.4772 9.4772 2 15 2C17.1637 2 19.269 2.7018 21 4M3 10L17 10M3 14L17 14");
}
</style><path class="c14t5ib6h"/>`,
		"fallback": "keyline-icons:euro",
	});
}

export default Component;
