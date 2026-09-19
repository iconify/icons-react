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
		"content": `<style>.etfsozrby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.584 41.5a6 6 0 0 1-6-6v-17h-17a6 6 0 0 1 0-12h23a6 6 0 0 1 6 6v23a6 6 0 0 1-6 6");
}

.ju1ivmpdq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.584 41.5a6 6 0 0 1-4.242-10.242l23-23a6 6 0 1 1 8.484 8.484l-23 23a5.98 5.98 0 0 1-4.242 1.758");
}

.sykp3folz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.584 18.5v-6a6 6 0 0 1 6-6h0m-6 12h6a6 6 0 0 0 6-6h0");
}
</style><path class="etfsozrby"/><path class="ju1ivmpdq"/><path class="sykp3folz"/>`,
		"fallback": "arcticons:boursorama-banque",
	});
}

export default Component;
