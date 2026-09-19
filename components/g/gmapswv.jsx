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
		"content": `<style>.ppj6_ib-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 37.363L37.884 43.5l1.287-1.584L24 4.5L8.829 41.916l1.287 1.584z");
}
</style><path class="ppj6_ib-a"/>`,
		"fallback": "arcticons:gmapswv",
	});
}

export default Component;
