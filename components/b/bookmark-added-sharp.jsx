import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o4pjcuu9e {
  fill: currentColor;
  d: path("M17.114 9L15 6.887l.689-.714l1.424 1.425l3.525-3.55l.714.714zM6 19.5V4h7.77q-.386.596-.578 1.197T13 6.5q0 1.742 1.157 3.012T17 10.958q.287.036.5.036t.5-.036V19.5l-6-2.577z");
}
</style><path class="o4pjcuu9e"/>`,
		"fallback": "material-symbols-light:bookmark-added-sharp",
	});
}

export default Component;
