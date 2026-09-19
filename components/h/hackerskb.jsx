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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.u4i4i8brz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.589 30.117h5.938m-5.938-11.875h5.938m-5.938 5.938h3.871m-3.871-5.938v11.875m22.822-2.389a2.966 2.966 0 0 1-2.94 2.574h0a2.966 2.966 0 0 1-2.965-2.966v-1.958a2.966 2.966 0 0 1 2.965-2.965h0a2.966 2.966 0 0 1 2.94 2.565m-8.513-2.381h-3.774a1.88 1.88 0 0 0-1.88 1.88h0a1.88 1.88 0 0 0 1.88 1.88h1.894a1.88 1.88 0 0 1 1.88 1.88h0a1.88 1.88 0 0 1-1.88 1.88h-3.774");
}
</style><path class="u4i4i8brz"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:hackerskb",
	});
}

export default Component;
