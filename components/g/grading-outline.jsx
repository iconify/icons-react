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
		"content": `<style>.uld6wngev {
  fill: currentColor;
  d: path("m15.964 19.994l-2.133-2.132l.688-.689l1.425 1.425l3.348-3.348l.708.708zM4 20v-1h8v1zm0-3.75v-1h8v1zm0-3.75v-1h16v1zm0-3.75v-1h16v1zM4 5V4h16v1z");
}
</style><path class="uld6wngev"/>`,
		"fallback": "material-symbols-light:grading-outline",
	});
}

export default Component;
