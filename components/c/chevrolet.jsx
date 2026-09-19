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
		"content": `<style>.k2dbgxb5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.389 26.422H30.543v3.114H17.835v-3.114H3.5l1.914-5h12.42v-2.958h12.709v2.958H44.5z");
}
</style><path class="k2dbgxb5g"/>`,
		"fallback": "arcticons:chevrolet",
	});
}

export default Component;
