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
		"content": `<style>.ap6r-vbbb {
  cx: 24px;
  cy: 37.721px;
  r: 1.702px;
}

.r4h1y5b9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2zm-11-11l11 11");
}

.rwlbkzi5w {
  d: path("M23.982 32.389V19.578");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="r4h1y5b9l"/><g class="y9tr6bcfx"><circle class="ap6r-vbbb"/><path class="rwlbkzi5w"/></g>`,
		"fallback": "arcticons:file-exclamation",
	});
}

export default Component;
