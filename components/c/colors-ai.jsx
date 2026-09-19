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
		"content": `<style>.ei6_l18li {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-7.713 0l-1 37m.557-20.611l12.156.366M15.744 5.5l14.122 34.074m-9.694-23.392L11.351 42.5m4.733-14.121l9.276.322");
}
</style><path class="ei6_l18li"/>`,
		"fallback": "arcticons:colors-ai",
	});
}

export default Component;
