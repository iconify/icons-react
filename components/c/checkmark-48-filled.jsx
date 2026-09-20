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
		"content": `<style>.dtbymwbfv {
  fill: currentColor;
  d: path("M40.317 12.695a1.5 1.5 0 0 1-.012 2.122l-22.25 22a1.5 1.5 0 0 1-2.101.008l-9.25-9a1.5 1.5 0 1 1 2.092-2.15l8.196 7.974l21.203-20.966a1.5 1.5 0 0 1 2.122.012");
}
</style><path class="dtbymwbfv"/>`,
		"fallback": "fluent:checkmark-48-filled",
	});
}

export default Component;
