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
		"content": `<style>.ur482lbah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 2H15C15.5523 2 16 2.4477 16 3C16 5 17 6.5 17 9C17 12.5 14.8 15 12 15C9.2 15 7 12.5 7 9C7 6.5 8 5 8 3C8 2.4477 8.4477 2 9 2ZM7.4503 6H16.5497M12 15V22M8 22H16");
}
</style><path class="ur482lbah"/>`,
		"fallback": "keyline-icons:champagne",
	});
}

export default Component;
