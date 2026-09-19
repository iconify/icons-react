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
		"content": `<style>.j0hwz-bbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.999 5.5L6.567 8.885v26.04l5.432-3.386zm0 0h24.44a2.14 2.14 0 0 1 2.144 2.136V31.54H12");
}

.o_tn5sjhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.047 25.135l4.507-13.333l4.506 13.333");
}

.y0h62sbkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.584 11.33h2.849V42.5H11.698a2.14 2.14 0 0 1-2.144-2.136v-7.301m19.013-12.344H22.54");
}
</style><path class="j0hwz-bbp"/><path class="y0h62sbkf"/><path class="o_tn5sjhc"/>`,
		"fallback": "arcticons:autocad",
	});
}

export default Component;
