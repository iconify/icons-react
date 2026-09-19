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
		"content": `<style>.hq8i549as {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.778 38.523l-1.084 4.068h3.356l1.084-4.068m22.288 0l1.085 4.068h-3.356l-1.084-4.068m-21.89-8.508c7.758-9.732 16.508-18.17 19.152-15.864s-9.56 10.711-6.915 13.525s7.05-6.848 9.118-5.22s-2.61 5.152-1.016 6.576s4.101-2.475 4.101-2.475m-10-18.949a2.017 2.017 0 0 0-4.033 0");
}

.n4oa_3bls {
  width: 35.695px;
  height: 30.915px;
  x: 5.753px;
  y: 7.608px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.836px;
  ry: 4.836px;
}
</style><rect class="n4oa_3bls"/><path class="hq8i549as"/>`,
		"fallback": "arcticons:creative-studio",
	});
}

export default Component;
