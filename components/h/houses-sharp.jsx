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
		"content": `<style>.lba_6gdid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 21h8m-8 0H3v-7.625L8 9l5 4.375zm0-14h.01M17 7h.01M17 11h.01M17 15h.01M9 9.875V3h12v18");
}
</style><path class="lba_6gdid"/>`,
		"fallback": "coolicons:houses-sharp",
	});
}

export default Component;
