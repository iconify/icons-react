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
		"content": `<style>.q91yzzb-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M5 21V3h4v9l5-3v3l5-3v12M8 16h.01M12 16h.01M16 16h.01");
}
</style><path class="q91yzzb-y"/>`,
		"fallback": "coolicons:factory-sharp",
	});
}

export default Component;
