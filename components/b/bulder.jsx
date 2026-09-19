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
		"content": `<style>.c5v5j4l5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.448 28.705l-9.607 9.411h-9.554l9.606-9.411z");
}

.j21vfp1hg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.893 9.884h-9.554L4.5 28.753v8.797L28.541 14l5.405 5.295l-9.607 9.41h9.554l9.607-9.41z");
}
</style><path class="c5v5j4l5m"/><path class="j21vfp1hg"/>`,
		"fallback": "arcticons:bulder",
	});
}

export default Component;
