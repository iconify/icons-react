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
		"content": `<style>.r47vw7x-m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M24.835 24h-5.504");
}

.tejjblb7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.332 12.5h4.83a3.833 3.833 0 0 1 3.832 3.833v3.834A3.833 3.833 0 0 1 24.161 24h.674a3.833 3.833 0 0 1 3.833 3.833v3.834a3.833 3.833 0 0 1-3.833 3.833h-5.504m0-23v23");
}
</style><path class="r47vw7x-m"/><path class="tejjblb7l"/>`,
		"fallback": "arcticons:blockbuster",
	});
}

export default Component;
