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
		"content": `<style>.y5_5qyywr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.964 43H13.162l-4.466-8.806h30.608zM24 5l-9.371 26.644l17.255-5.664z");
}
</style><path class="y5_5qyywr"/>`,
		"fallback": "arcticons:boat-progear",
	});
}

export default Component;
