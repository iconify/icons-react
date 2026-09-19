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
		"content": `<style>.nahyakb1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 28.828c0 7.551-6.121 13.672-13.672 13.672s-13.671-6.121-13.671-13.672s6.12-13.671 13.671-13.671S42.5 21.277 42.5 28.828");
}

.x0tyo6_fn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.843 19.172c0 7.55-6.12 13.671-13.671 13.671S5.5 26.723 5.5 19.172S11.621 5.5 19.172 5.5s13.671 6.121 13.671 13.672");
}
</style><path class="x0tyo6_fn"/><path class="nahyakb1v"/>`,
		"fallback": "arcticons:breeno-shortcuts",
	});
}

export default Component;
