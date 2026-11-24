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
		"content": `<style>.bi_p6tbep {
  fill: currentColor;
  d: path("M18 11a7 7 0 0 0-5.612-6.861A7 7 0 0 0 4.55 8.276a6.99 6.99 0 0 0 1.5 7.674A6.97 6.97 0 0 0 11 18a1 1 0 0 1 0 2A9 9 0 0 1 6.028 3.498a9 9 0 0 1 8.476-.79A8.99 8.99 0 0 1 20 11a1 1 0 0 1-2 0m-6-4v3h2a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0m4.707 8.293L18 16.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L19.414 18l1.293 1.293a.999.999 0 1 1-1.414 1.414L18 19.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414L16.586 18l-1.293-1.293a.999.999 0 1 1 1.414-1.414");
}
</style><path class="bi_p6tbep"/>`,
		"fallback": "coolicons:clock-close-fill-round",
	});
}

export default Component;
