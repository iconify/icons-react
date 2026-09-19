import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dfcdh9g5e {
  cx: 8.498px;
  cy: 24px;
  r: 4.998px;
}

.rdnad88be {
  d: path("M19.154 19.269v9.462m4.464-9.462v9.462m4.462-9.462v9.462m16.42-.069H33.733l5.383-9.503z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="dfcdh9g5e"/><path class="rdnad88be"/></g>`,
		"fallback": "arcticons:dimensional",
	});
}

export default Component;
