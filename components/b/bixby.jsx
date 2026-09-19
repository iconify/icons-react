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
		"content": `<style>.kly-qv4ia {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.715 22.547a6.865 6.865 0 1 1-6.865 6.865v-6.865Zm-6.865 0V5.57");
}

.rj9jyvboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5A18.5 18.5 0 1 1 5.5 24V5.5Z");
}
</style><path class="rj9jyvboq"/><path class="kly-qv4ia"/>`,
		"fallback": "arcticons:bixby",
	});
}

export default Component;
