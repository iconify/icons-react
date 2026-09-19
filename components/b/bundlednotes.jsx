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
		"content": `<style>.hh6aot7hk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7 20v13.44a4.2 4.2 0 0 0 4.19 4.19H32a4.08 4.08 0 0 0 2.2-7.51l-21-13.51A4 4 0 0 0 7 20");
}

.iockdrbcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41 33.87a4.41 4.41 0 0 1-6.54 3.86l-18-9.91a4 4 0 0 1 0-7l18-9.91A4.41 4.41 0 0 1 41 14.73");
}

.lu72hbbga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.39 37.63v3.67a2.21 2.21 0 0 0 2.2 2.2H30.4a10.56 10.56 0 0 0 7.42-18.08a2 2 0 0 1 0-2.84a10.56 10.56 0 0 0-6.22-18a10 10 0 0 0-1.2-.07H16.59a2.21 2.21 0 0 0-2.2 2.2v10.7");
}
</style><path class="lu72hbbga"/><path class="hh6aot7hk"/><path class="iockdrbcv"/>`,
		"fallback": "arcticons:bundlednotes",
	});
}

export default Component;
