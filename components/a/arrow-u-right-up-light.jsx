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
		"content": `<style>.tk1gkq-av {
  fill: currentColor;
  d: path("M220.24 84.24a6 6 0 0 1-8.48 0L174 46.49V168a62 62 0 0 1-124 0V80a6 6 0 0 1 12 0v88a50 50 0 0 0 100 0V46.49l-37.76 37.75a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 0 1 0 8.48");
}
</style><path class="tk1gkq-av"/>`,
		"fallback": "ph:arrow-u-right-up-light",
	});
}

export default Component;
