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
		"content": `<style>.plrxxqqma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 6.765L28.139 25.54m-1.06 1.768L15.92 41.235m-10.42 0l10.695-13.927l4.073 13.927l10.673-13.927l4.073 13.927M20.196 27.308l4.8 13.927m-14.148-6.963h7.384m7.373 0h7.373");
}
</style><path class="plrxxqqma"/>`,
		"fallback": "arcticons:axa",
	});
}

export default Component;
