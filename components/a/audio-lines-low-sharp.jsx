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
		"content": `<style>.sdnwuib5w {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 10V14M8 9V15M12 7V17M16 10V14M20 9V15");
}
</style><path class="sdnwuib5w"/>`,
		"fallback": "keyline-icons:audio-lines-low-sharp",
	});
}

export default Component;
