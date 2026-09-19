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
		"content": `<style>.uzo6-gb3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.001 24a14.75 14.75 0 1 1-14.75-14.75h21.633c1.967 0 3.556 1.531 1.967 4.481s-1.361 3.461-5.067 3.461H19.252A6.808 6.808 0 1 0 26.06 24c0-.268.444-.615.817-.615h6.387a.65.65 0 0 1 .737.615");
}
</style><path class="uzo6-gb3s"/>`,
		"fallback": "arcticons:aodnotify",
	});
}

export default Component;
