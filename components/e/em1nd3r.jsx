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
		"content": `<style>.c4x37bc5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.301 37.433v-11.73h3.84c2.172 0 3.932 1.764 3.932 3.94s-1.76 3.939-3.932 3.939h-3.84m3.84 0l3.84 3.848m-20.393.003v-11.73h2.64a5.13 5.13 0 0 1 5.131 5.132V32.3a5.13 5.13 0 0 1-5.132 5.132zm10.34-15.283V10.433l5.866 11.73l5.865-11.712v11.712M20.681 19.93a4.426 4.426 0 0 1-8.273-2.193V14.86a4.426 4.426 0 0 1 8.853 0v1.438h-8.853");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="c4x37bc5g"/>`,
		"fallback": "arcticons:em1nd3r",
	});
}

export default Component;
