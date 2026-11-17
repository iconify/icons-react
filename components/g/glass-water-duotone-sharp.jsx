import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.rsoa66bpq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m18 12l-1 9H7l-1-9Z");
}

.ze1wjulcc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3h14l-2 18H7zm1 9h12");
}
</style><g class="ft5dv1b6b"><path class="rsoa66bpq"/><path class="ze1wjulcc"/></g>`,
		"fallback": "coolicons:glass-water-duotone-sharp",
	});
}

export default Component;
