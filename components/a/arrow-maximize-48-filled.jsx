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
		"content": `<style>.cioxk4bpu {
  fill: currentColor;
  d: path("M39 7.5A1.5 1.5 0 0 1 40.5 9v15.5a1.5 1.5 0 0 1-3 0V12.621L12.621 37.5H24.5a1.5 1.5 0 0 1 0 3H9A1.5 1.5 0 0 1 7.5 39V23.5a1.5 1.5 0 0 1 3 0v11.879L35.379 10.5H23.5a1.5 1.5 0 0 1 0-3z");
}
</style><path class="cioxk4bpu"/>`,
		"fallback": "fluent:arrow-maximize-48-filled",
	});
}

export default Component;
