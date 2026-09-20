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
		"content": `<style>.ceb-0pbof {
  fill: currentColor;
  d: path("M240 192h-8V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 56h176v136h-16v-24a8 8 0 0 0-8-8h-72a8 8 0 0 0-8 8v24H72V88h112v48a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v112H40Zm144 136h-56v-16h56Z");
}
</style><path class="ceb-0pbof"/>`,
		"fallback": "ph:chalkboard",
	});
}

export default Component;
