import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iasxcu0ld {
  fill: currentColor;
  d: path("M1.05 3A2.5 2.5 0 0 1 3.5 1h5a2.5 2.5 0 0 1 2.45 2zM1 4v4.5A2.5 2.5 0 0 0 3.5 11h5A2.5 2.5 0 0 0 11 8.5V4zm2 1.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m0 2a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M5.5 5a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M5 7.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M7.5 5a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1");
}
</style><path class="iasxcu0ld"/>`,
		"fallback": "fluent:calendar-12-filled",
	});
}

export default Component;
