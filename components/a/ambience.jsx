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
		"content": `<style>.em_jn5_ha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.76 4.5v37.44m3.12-24.96V43.5M24 8.4v26.52m3.12-23.4v26.52M30.24 8.4v26.52m3.12-16.38v11.7M14.64 12.3v24.18M11.52 20.1v7.8m24.96-7.8v7.8");
}
</style><path class="em_jn5_ha"/>`,
		"fallback": "arcticons:ambience",
	});
}

export default Component;
