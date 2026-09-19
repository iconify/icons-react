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
		"content": `<style>.j9ky64bpx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 28.75v-14.5m4.328 17.001L40.888 24m-7.138-7.137l-7.251 12.56M29 33.75h14.5m-23.828-2.499L7.112 24m7.138-7.137l7.251 12.56M19 33.75H4.5");
}
</style><path class="j9ky64bpx"/>`,
		"fallback": "arcticons:fable",
	});
}

export default Component;
