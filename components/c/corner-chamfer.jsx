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
		"content": `<style>.q1gm1rzab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L14.5858 3C14.851 3 15.1054 3.1054 15.2929 3.2929L20.7071 8.7071C20.8946 8.8946 21 9.149 21 9.4142L21 21");
}
</style><path class="q1gm1rzab"/>`,
		"fallback": "keyline-icons:corner-chamfer",
	});
}

export default Component;
