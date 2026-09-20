import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lr63unbgj {
  fill: currentColor;
  d: path("M10.5 9.5a.5.5 0 0 0-1 0V11a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 0-1h-1zM7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3zM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm5.5 8a4 4 0 1 0-8 0a4 4 0 0 0 8 0");
}
</style><path class="lr63unbgj"/>`,
		"fallback": "fluent:clipboard-clock-20-filled",
	});
}

export default Component;
