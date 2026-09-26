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
		"content": `<style>.to0c2ub7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u4az-xbcb {
  stroke-opacity: 0.4;
  d: path("M12 4L12 22M20 2L20 14");
}

.vqkc50bpn {
  d: path("M4 16L4 22");
}
</style><g class="to0c2ub7t"><path class="u4az-xbcb"/><path class="vqkc50bpn"/></g>`,
		"fallback": "keyline-icons:align-offset-right-duotone",
	});
}

export default Component;
