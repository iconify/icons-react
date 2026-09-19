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
		"content": `<style>.v_5glj9pk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.063 29.283l19.63-.06M8.486 5.5l23.277.028l7.752 7.628l-.113 29.344l-30.435-.327l.04-23.457l19.685.062");
}
</style><path class="v_5glj9pk"/>`,
		"fallback": "arcticons:estkme",
	});
}

export default Component;
