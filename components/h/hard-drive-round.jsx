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
		"content": `<style>.s6my62buq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19H6a3 3 0 0 1-3-3v-3l3-6c.613-1.226 1.774-2 3-2h6c1.226 0 2.387.774 3 2l3 6v3a3 3 0 0 1-3 3zm-9-6h18M7 16h.01M11 16h.01");
}
</style><path class="s6my62buq"/>`,
		"fallback": "coolicons:hard-drive-round",
	});
}

export default Component;
