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
		"content": `<style>.oouyjsbqr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 12L8 12M4.7071 8.7071L8 12L4.7071 15.2929M23 12L16 12M19.2929 8.7071L16 12L19.2929 15.2929M12 4L12 20");
}
</style><path class="oouyjsbqr"/>`,
		"fallback": "keyline-icons:fold-horizontal-sharp-fill",
	});
}

export default Component;
