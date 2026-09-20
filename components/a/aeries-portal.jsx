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
		"content": `<style>.lbbj-sbpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.14 42.5l-1.843-5.635h-15.52L16.88 42.5m9.774-29.515L21.163 29.58h10.808z");
}

.udl7ntnvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4m-1.582 37l13.064-37m11.526 0L42.5 33.767");
}
</style><path class="udl7ntnvw"/><path class="lbbj-sbpi"/>`,
		"fallback": "arcticons:aeries-portal",
	});
}

export default Component;
