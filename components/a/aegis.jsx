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
		"content": `<style>.c2410vb4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.59 40a2.4 2.4 0 0 1-3.28-.88l-.48-.82A2.4 2.4 0 0 1 20 35.91l.48.82a2.42 2.42 0 0 1-.89 3.27m10.85 0a2.4 2.4 0 0 1-3.28-.88l-5.64-9.76A2.4 2.4 0 1 1 25.68 27l5.64 9.77a2.39 2.39 0 0 1-.88 3.23m10.86 0a2.42 2.42 0 0 1-3.3-.86L25.67 17.75a1.92 1.92 0 0 0-3.33 0L10 39.14a2.42 2.42 0 0 1-2.09 1.2A2.37 2.37 0 0 1 6.7 40a2.4 2.4 0 0 1-.88-3.28l16.1-27.86a2.4 2.4 0 0 1 4.16 0l16.1 27.88A2.4 2.4 0 0 1 41.3 40");
}
</style><path class="c2410vb4n"/>`,
		"fallback": "arcticons:aegis",
	});
}

export default Component;
