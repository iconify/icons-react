import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.idic98byh {
  fill: currentColor;
  d: path("M4 9V3h8.028l-1.935 2.71a.5.5 0 0 0-.053.486a5.5 5.5 0 0 1 1.084-.183L11.114 6l2.293-3.21A.5.5 0 0 0 13 2H3.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V10h2.207q.149-.524.393-1zm12 2.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M11.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 0-1h-1V9.5a.5.5 0 0 0-.5-.5");
}
</style><path class="idic98byh"/>`,
		"fallback": "fluent:flag-clock-16-regular",
	});
}

export default Component;
