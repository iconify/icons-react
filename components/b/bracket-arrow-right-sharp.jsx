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
		"content": `<style>.cjms66bdx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12.1093 4L2 4L2 20L12.1093 20M21.7586 12L10.1093 12M15.8562 6.204L22 12L15.8562 17.796");
}
</style><path class="cjms66bdx"/>`,
		"fallback": "keyline-icons:bracket-arrow-right-sharp",
	});
}

export default Component;
