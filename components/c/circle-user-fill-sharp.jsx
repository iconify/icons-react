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
		"content": `<style>.vyv9g8b9q {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m6.315-3.557a4 4 0 1 0 7.37 3.114a4 4 0 0 0-7.37-3.114m-1.653 9.516a8.003 8.003 0 0 0 10.676 0a8.25 8.25 0 0 0-10.676 0");
}
</style><path class="vyv9g8b9q"/>`,
		"fallback": "coolicons:circle-user-fill-sharp",
	});
}

export default Component;
