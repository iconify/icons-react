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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.d7pnffbso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.714 27.071l6.627-6.636l2.588 2.541v4.095h4.095l2.56 2.56l-6.655 6.655m15.357-15.357l-6.627 6.636l-2.588-2.541v-4.095h-4.095l-2.56-2.56l6.655-6.655");
}
</style><circle class="cpk0fnbgt"/><path class="d7pnffbso"/>`,
		"fallback": "arcticons:emblem",
	});
}

export default Component;
