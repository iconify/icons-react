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
		"content": `<style>.keubpsiam {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.973 20.705L25.945 6.409a2.92 2.92 0 0 0-3.89 0L6.027 20.705c-1.074.958-.396 2.737 1.044 2.737h2.05v16.617a2.275 2.275 0 0 0 2.275 2.274h25.208a2.275 2.275 0 0 0 2.275-2.274V23.44h2.05c1.44 0 2.118-1.78 1.044-2.737z");
}
</style><path class="keubpsiam"/>`,
		"fallback": "arcticons:home",
	});
}

export default Component;
