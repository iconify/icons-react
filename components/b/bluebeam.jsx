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
		"content": `<style>.ewvsp636c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 17.833h12.333v12.333H17.833z");
}

.hxffalbqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.667 36.333V5.5H5.5v37h37v-37H17.833v6.167h18.5v24.667z");
}
</style><path class="ewvsp636c"/><path class="hxffalbqi"/>`,
		"fallback": "arcticons:bluebeam",
	});
}

export default Component;
