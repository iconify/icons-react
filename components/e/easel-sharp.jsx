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
		"content": `<style>.w7bg-j5tn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 3L20 3L20 16L4 16L4 3ZM1 16L23 16M8 16L6.2862 21.7127M16 16L17.7138 21.7127M12 16L12 20");
}
</style><path class="w7bg-j5tn"/>`,
		"fallback": "keyline-icons:easel-sharp",
	});
}

export default Component;
