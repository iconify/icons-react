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
		"content": `<style>.gkaxl5b6d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.597 29.956h7.719V18.285h9.538");
}

.okejc9bkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.316 23.985h16.188v-5.7M22.204 5.5v6.738h-2.497m5.009 14.182L41.172 38.1l-2.2 3.389l-16.246-11.994l-1.149-3.08z");
}

.u2tnuthol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.628 12.238H40.77V5.5H6.828v37h12.819m-3.761 0v-5.595");
}
</style><path class="u2tnuthol"/><path class="gkaxl5b6d"/><path class="okejc9bkv"/>`,
		"fallback": "arcticons:floor-plan-creator",
	});
}

export default Component;
