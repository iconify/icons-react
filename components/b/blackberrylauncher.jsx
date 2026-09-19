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
		"content": `<style>.lomog1diu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.51 36.75H7.87V17.94L24 5.5l16.13 12.44v18.81h-5.64m-17.17-5.58h2.12c1.38 0 1.7.67 1.7 1.21c0 .75-.49 1.57-2.21 1.57h-2.21Zm5.71 0h2.11c1.38 0 1.7.67 1.7 1.21c0 .75-.49 1.57-2.21 1.57h-2.2Zm5.2 2.49h2.11c1.38 0 1.7.68 1.7 1.21c0 .76-.49 1.57-2.21 1.57h-2.21Zm-11.67 1.7h2.11c1.38 0 1.71.67 1.71 1.21c0 .75-.49 1.57-2.22 1.57H16Zm5.7 0h2.12c1.37 0 1.7.67 1.7 1.21c0 .75-.49 1.57-2.21 1.57h-2.21ZM27.4 38h2.12c1.38 0 1.7.67 1.7 1.21c0 .75-.49 1.57-2.21 1.57H26.8Zm-6 1.7h2.12c1.37 0 1.7.67 1.7 1.21c0 .76-.49 1.57-2.21 1.57h-2.17Z");
}
</style><path class="lomog1diu"/>`,
		"fallback": "arcticons:blackberrylauncher",
	});
}

export default Component;
