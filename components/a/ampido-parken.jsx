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
		"content": `<style>.edfk_-bzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.807 12.338l18.658-.004V31.3h-9.143v-9.576h-9.514l-.004-9.389M7.54 17.008l-.005 18.658h18.966v-9.143h-9.576v-9.514l-9.389-.004");
}
</style><path class="edfk_-bzq"/>`,
		"fallback": "arcticons:ampido-parken",
	});
}

export default Component;
