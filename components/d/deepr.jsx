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
		"content": `<style>.to8786byg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.367 32.205l-7.26 7.265a8.553 8.553 0 0 1-12.1 0a8.564 8.564 0 0 1 0-12.107l7.26-7.265a8.6 8.6 0 0 1 1.474-1.182m5.112-1.308a8.52 8.52 0 0 1 5.514 2.49a8.55 8.55 0 0 1 2.41 7.336");
}

.yo0zf8bxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.893 8.53a8.553 8.553 0 0 1 12.1 0a8.564 8.564 0 0 1 0 12.108l-7.26 7.264a8.553 8.553 0 0 1-12.1 0a8.564 8.564 0 0 1 0-12.107z");
}
</style><path class="yo0zf8bxb"/><path class="to8786byg"/>`,
		"fallback": "arcticons:deepr",
	});
}

export default Component;
