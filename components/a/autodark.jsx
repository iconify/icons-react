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
		"content": `<style>.f3cut_66g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.827 42.077H26.7V43.5h-5.124v-1.423h-4.413V29.978a14.075 14.075 0 0 1-6.12-15.657C12.608 7.916 18.017 4.5 23.995 4.5a13.41 13.41 0 0 1 12.953 9.821c1.566 5.836-.897 11.956-6.12 15.657Z");
}
</style><path class="f3cut_66g"/>`,
		"fallback": "arcticons:autodark",
	});
}

export default Component;
