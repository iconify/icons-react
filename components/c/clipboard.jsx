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
		"content": `<style>.od6ziru9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.857 15.136h20.286m-6.091-6.584a4.052 4.052 0 0 0-8.104 0H9.298V43.5h29.403V8.552z");
}

.xazr_i00f {
  cx: 24px;
  cy: 8.552px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="od6ziru9m"/><circle class="xazr_i00f"/>`,
		"fallback": "arcticons:clipboard",
	});
}

export default Component;
