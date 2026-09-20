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
		"content": `<style>.z9ptonj_o {
  fill: none;
  stroke: currentColor;
  stroke-dashoffset: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.896 20.99L9.622 40.69c-2.063 1.26-4.342-.957-3.236-3.236L20.855 7.648c.894-1.841 3.035-1.411 3.72 0l16.487 33.928");
}
</style><path class="z9ptonj_o"/>`,
		"fallback": "arcticons:airtm",
	});
}

export default Component;
