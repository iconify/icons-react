import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qn154jb7b {
  fill: currentColor;
  d: path("M9 7.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m7-14a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m7-21a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5");
}
</style><path class="qn154jb7b"/>`,
		"fallback": "fluent:dialpad-32-filled",
	});
}

export default Component;
