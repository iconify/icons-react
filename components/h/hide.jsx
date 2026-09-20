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
		"content": `<style>.t4-ikwbkj {
  fill: currentColor;
  d: path("M4.714 19.98L4 19.268l5.1-5.094H6.058v-1h4.75v4.75h-1v-3.042zm8.478-9.191v-4.75h1V9.08l5.095-5.1l.713.713l-5.1 5.095h3.042v1z");
}
</style><path class="t4-ikwbkj"/>`,
		"fallback": "material-symbols-light:hide",
	});
}

export default Component;
