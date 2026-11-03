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
		"content": `<style>.rss0au3ky {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 13L6 10L18 10L18 22L13 22M18 13L22 13L22 19L18 19M10.5 7L10.5 6C10.5 5.2131 10.8705 4.4721 11.5 4C12.1295 3.5279 12.5 2.7869 12.5 2L12.5 1M15.5 7L15.5 6C15.5 5.2131 15.8705 4.4721 16.5 4C17.1295 3.5279 17.5 2.7869 17.5 2L17.5 1M8.5455 16C11.5579 16 14 18.4421 14 21.4545L14 22L2 22L2 21.4545C2 18.4421 4.4421 16 7.4546 16L8.5455 16ZM8 16L8 22");
}
</style><path class="rss0au3ky"/>`,
		"fallback": "keyline-icons:breakfast-sharp",
	});
}

export default Component;
