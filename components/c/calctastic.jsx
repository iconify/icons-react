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
		"content": `<style>.bugdvbbkr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.409 36.409h27.182V43.5H10.409zm27.182-21.864H27.545V4.5h-7.09v10.045H10.409v7.091h10.046v10.046h7.09V21.636h10.046z");
}
</style><path class="bugdvbbkr"/>`,
		"fallback": "arcticons:calctastic",
	});
}

export default Component;
