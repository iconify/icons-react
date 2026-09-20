import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i09wq1bym {
  fill: currentColor;
  d: path("M56 84a12 12 0 0 1 12-12h120a12 12 0 0 1 12 12v88a12 12 0 0 1-24 0V96H68a12 12 0 0 1-12-12m180-28v144a20 20 0 0 1-20 20h-66.74a12 12 0 0 1-11.4-8.26a36 36 0 0 0-67.74 0A12 12 0 0 1 58.74 220H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20M104 164a16 16 0 1 0-16-16a16 16 0 0 0 16 16M212 60H44v136h6.92a60.2 60.2 0 0 1 21.76-23.16a40 40 0 1 1 62.64 0A60.2 60.2 0 0 1 157.08 196H212Z");
}
</style><path class="i09wq1bym"/>`,
		"fallback": "ph:chalkboard-teacher-bold",
	});
}

export default Component;
