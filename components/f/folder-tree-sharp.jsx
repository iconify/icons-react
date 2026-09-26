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
		"content": `<style>.x21x-1rzl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 2L3 19L10 19M3 5L3 8L10 8M13 3L16 3L17 5L21 5L21 10L13 10L13 3ZM13 14L16 14L17 16L21 16L21 21L13 21L13 14Z");
}
</style><path class="x21x-1rzl"/>`,
		"fallback": "keyline-icons:folder-tree-sharp",
	});
}

export default Component;
