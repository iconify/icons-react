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
		"content": `<style>.gjmt7w4ut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.906 25.5h-2.625l3.61-3.609L34.5 25.5zm-11.812.001h2.625l-3.61 3.609l-3.609-3.609z");
}

.ns9ribt9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 9.5h-1a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-28a2 2 0 0 0-2-2h-1m-6 0h-19m22 3v-6m-25 6v-6");
}

.p9kczcb_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.09 31.288A6.986 6.986 0 0 0 30.985 25.5m-3.079-5.792a6.986 6.986 0 0 0-10.89 5.792");
}
</style><path class="ns9ribt9h"/><path class="p9kczcb_s"/><path class="gjmt7w4ut"/>`,
		"fallback": "arcticons:dailypic",
	});
}

export default Component;
