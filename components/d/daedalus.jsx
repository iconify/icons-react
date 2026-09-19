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

.zs7lse6se {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 34.4c.9 0 8.1-4.2 8.1-9.1v-7.7l-8.1-4l-8.1 4v7.7c0 5 7.2 9.1 8.1 9.1m0-.2V13.8M16 24h16");
}
</style><circle class="cpk0fnbgt"/><path class="zs7lse6se"/>`,
		"fallback": "arcticons:daedalus",
	});
}

export default Component;
