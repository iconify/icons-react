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
		"content": `<style>.l15f1i1vy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.234 20.634A21.5 21.5 0 0 1 33.76 43.156A21.498 21.498 0 0 1 4.844 14.24A21.5 21.5 0 0 1 27.366 2.766m-1.341 17.691l11.128 6.702m-9.99-4.426l.11-15.947M42.25 11.87l-2.718-1.602l-2.699 1.565l.684-3.08l-2.323-2.083l3.142-.301l1.263-2.853l1.257 2.895l3.103.32l-2.364 2.09z");
}

.uc35upblu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.12 20.836a17.96 17.96 0 0 1-11.085 16.591a17.96 17.96 0 0 1-19.576-3.892a17.96 17.96 0 0 1-3.892-19.576a17.96 17.96 0 0 1 16.59-11.085");
}
</style><path class="uc35upblu"/><path class="l15f1i1vy"/>`,
		"fallback": "arcticons:alazan",
	});
}

export default Component;
