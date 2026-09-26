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
		"content": `<style>.nnm9yk__a {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 2L12 14M7.7071 9.7071L12 14L16.2929 9.7071M4 17L4 21L20 21L20 17");
}
</style><path class="nnm9yk__a"/>`,
		"fallback": "keyline-icons:download-sharp",
	});
}

export default Component;
