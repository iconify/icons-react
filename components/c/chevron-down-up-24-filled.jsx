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
		"content": `<style>.axhy9jbzd {
  fill: currentColor;
  d: path("M6.707 2.793a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L12 8.086zm0 18.414a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 15.914z");
}
</style><path class="axhy9jbzd"/>`,
		"fallback": "fluent:chevron-down-up-24-filled",
	});
}

export default Component;
