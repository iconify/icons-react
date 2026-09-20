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
		"content": `<style>.uph4zqc9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h24l9-9v-24a4 4 0 0 0-4-4m-5 0v37m-19-28v28m28-9h-37m37-19h-28");
}

.uzsq87b4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.019 27.713c.675.562 1.237.787 2.7.787h.337c1.575 0 2.925-1.35 2.925-2.925s-1.35-2.925-2.925-2.925H21.02V19.5h5.962");
}
</style><path class="uzsq87b4m"/><path class="uph4zqc9i"/>`,
		"fallback": "arcticons:calendar-google-5",
	});
}

export default Component;
