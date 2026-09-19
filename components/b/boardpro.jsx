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
		"content": `<style>.k61_v2b4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.213 15.804l-14.426-7.93L22.945 4.5l14.426 7.93v6.749l-14.426 7.93l-6.158-3.375z");
}

.rf6lnmp1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.629 36.751V11.249l6.158-3.375v32.252zm20.584-4.555l-14.426 7.93l6.158 3.374l14.426-7.93v-9.624l-6.158-3.374z");
}
</style><path class="rf6lnmp1x"/><path class="k61_v2b4f"/>`,
		"fallback": "arcticons:boardpro",
	});
}

export default Component;
