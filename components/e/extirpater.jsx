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
		"content": `<style>.dj5f-fbot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.55 15.694v21.282c0 2.144 2.33 3.87 5.225 3.87h10.449c2.894 0 5.225-1.726 5.225-3.87V15.694Zm-2.075-4.888v1.522a.957.957 0 0 0 .836 1.043h23.378a.957.957 0 0 0 .836-1.043v-1.522a.957.957 0 0 0-.836-1.043h-8.348a.957.957 0 0 1-.836-1.043v-.522a.957.957 0 0 0-.836-1.043h-3.338a.957.957 0 0 0-.836 1.043v.522a.957.957 0 0 1-.836 1.043h-8.348a.957.957 0 0 0-.836 1.043m9.962 13.596l5.125 7.735m0-7.735l-5.125 7.735");
}
</style><path class="dj5f-fbot"/>`,
		"fallback": "arcticons:extirpater",
	});
}

export default Component;
