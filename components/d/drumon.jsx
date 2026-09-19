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
		"content": `<style>.trqnvvilc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.68 17.67l.21 2.27l1.26 1.24l1.42-1.52l.2-2.96m-4.86-8.11l2.4-.92m-.19 3.45l-1.01-2.99");
}

.z9zr4ml2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.8 23.1l38.7-12.4v-.5l-17.9.7c-3.8-2.2-5.1-.6-6 1.8l-15 9.8ZM23.15 40V21.18");
}
</style><path class="z9zr4ml2p"/><path class="trqnvvilc"/>`,
		"fallback": "arcticons:drumon",
	});
}

export default Component;
