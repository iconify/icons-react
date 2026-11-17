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
		"content": `<style>.x2yhbdglo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 3h6v10h-6Zm-4 1H3v12h7m5 1l-2 2l2 2m4-4l2 2l-2 2");
}
</style><path class="x2yhbdglo"/>`,
		"fallback": "coolicons:devices-code-corner-sharp",
	});
}

export default Component;
