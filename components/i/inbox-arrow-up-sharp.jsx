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
		"content": `<style>.yofpfuhqr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.6996 6.7715L22 12.1534L22 20L2 20L2 12.1534L5.3004 6.7715M2 13L8 13L10 16L14 16L16 13L22 13M12 12L12 4M8.7071 7.2929L12 4L15.2929 7.2929");
}
</style><path class="yofpfuhqr"/>`,
		"fallback": "keyline-icons:inbox-arrow-up-sharp",
	});
}

export default Component;
