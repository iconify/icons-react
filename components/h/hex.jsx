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
		"content": `<style>.od2s6xblp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.321 24V14L24 4L6.679 14v20L24 44m-2.885-12.5v-15m5.77 15v-15M16.5 21.115h15m-15 5.77h15");
}
</style><path class="od2s6xblp"/>`,
		"fallback": "arcticons:hex",
	});
}

export default Component;
