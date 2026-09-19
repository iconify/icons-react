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
		"content": `<style>.ws91p9bxg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 31.97l7.97-15.94l7.972 15.94m-2.278-3.985H6.777m11.387-5.693v-6.263h5.033c1.139 0 2.206.214 3.167.605m2.527 1.673c.711.711 1.28 1.565 1.672 2.526s.605 2.028.605 3.167c0 4.555-3.416 7.97-7.868 7.97m5.34-15.94h10.248m-5.124 0v15.94m7.174-9.678v5.124m-2.562-2.562H43.5");
}
</style><path class="ws91p9bxg"/>`,
		"fallback": "arcticons:adt-plus",
	});
}

export default Component;
