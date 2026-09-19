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
		"content": `<style>.p5fupibdg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.194 24c0-4.186 3.426-7.611 7.612-7.611h9.083c4.186 0 7.611 3.425 7.611 7.611h0c0 4.186-3.425 7.611-7.611 7.611h-9.083a7.55 7.55 0 0 1-3.807-1.027");
}

.svw3dbebs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.806 24c0 4.186-3.426 7.611-7.612 7.611h-9.083C6.925 31.611 3.5 28.186 3.5 24h0c0-4.186 3.425-7.611 7.611-7.611h9.083c1.384 0 2.685.374 3.807 1.027");
}
</style><path class="svw3dbebs"/><path class="p5fupibdg"/>`,
		"fallback": "arcticons:easyshare",
	});
}

export default Component;
