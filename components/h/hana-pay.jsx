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
		"content": `<style>.z3xb7n66d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.494 7.15a2.649 2.649 0 1 1-5.296 0a2.649 2.649 0 0 1 5.295 0m-20.83 6.545c6.666 4.181 20.376 3.224 36.673-.847M20.358 33.973c-3.89-3.228-2.616-6.806-.777-8.744c4.012-4.232 10.326-.462 10.079 4.739c-.248 5.198-2.553 9.854-5.02 13.532");
}
</style><path class="z3xb7n66d"/>`,
		"fallback": "arcticons:hana-pay",
	});
}

export default Component;
