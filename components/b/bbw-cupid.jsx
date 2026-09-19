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
		"content": `<style>.pulqawl3f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.905 19.664c-6.038-6.608-15.95-16.293-20.45-10.653c-5.289 6.627 12.703 24.268 22.102 31.674");
}

.x493s0bmx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.095 19.664c6.038-6.608 15.95-16.293 20.451-10.653c5.288 6.627-12.704 24.268-22.103 31.674");
}
</style><path class="pulqawl3f"/><path class="x493s0bmx"/>`,
		"fallback": "arcticons:bbw-cupid",
	});
}

export default Component;
