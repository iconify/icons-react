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
		"content": `<style>.vvwb7_bzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.76 8.65h9.6v4.17h3.84V8.65h9.6v4.17h3.84V8.65h9.6v13.49H5.76zM21.2 30.43a3.14 3.14 0 0 1 2.8 3.23a3.14 3.14 0 0 1 2.8-3.23a5.45 5.45 0 0 1 3.87 1.7c5.65 4.4 9.74 3.61 12.83 1.58a7.47 7.47 0 0 1-6.17 5.49c-8.2.83-11.63-1.92-13-4.07a3.1 3.1 0 0 1-.33-1.47a3.1 3.1 0 0 1-.35 1.47c-1.35 2.15-4.78 4.9-13 4.07a7.47 7.47 0 0 1-6.15-5.49c3.09 2 7.18 2.82 12.83-1.58a5.45 5.45 0 0 1 3.87-1.7");
}
</style><path class="vvwb7_bzx"/>`,
		"fallback": "arcticons:clashroyale",
	});
}

export default Component;
