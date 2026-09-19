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
		"content": `<style>.ol1e5vbnf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.56 42.945l9.925-8.088a9.03 9.03 0 0 0 3.326-7V9.708a2.66 2.66 0 0 0-1.975-2.568l-7.15-1.897a22.17 22.17 0 0 0-11.372 0l-7.15 1.897a2.66 2.66 0 0 0-1.975 2.568v18.15a9.03 9.03 0 0 0 3.325 7l9.926 8.088a2.47 2.47 0 0 0 3.12 0M15.049 14.797h17.902m-17.902 5.979H24m-8.951 5.98h2.082");
}
</style><path class="ol1e5vbnf"/>`,
		"fallback": "arcticons:2fas-auth",
	});
}

export default Component;
