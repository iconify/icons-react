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
		"content": `<style>.cyqjnmbaj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.8 22.339L24 13.475l12.2 8.864l-4.66 14.342H16.46");
}

.hzeeagn7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.683L3.689 19.44l7.758 23.877h25.106l7.758-23.877");
}
</style><path class="hzeeagn7b"/><path class="cyqjnmbaj"/>`,
		"fallback": "arcticons:geode",
	});
}

export default Component;
