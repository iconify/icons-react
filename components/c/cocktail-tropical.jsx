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
		"content": `<style>.ng8lunuem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 2H15C15.5523 2 16 2.4477 16 3C16 5 15 5 15 6.5C15 8.5 17 9 17 11C17 14 14.5 16 12 16C9.5 16 7 14 7 11C7 9 9 8.5 9 6.5C9 5 8 5 8 3C8 2.4477 8.4477 2 9 2ZM9 6.5H15M12 16V22M8 22H16");
}
</style><path class="ng8lunuem"/>`,
		"fallback": "keyline-icons:cocktail-tropical",
	});
}

export default Component;
