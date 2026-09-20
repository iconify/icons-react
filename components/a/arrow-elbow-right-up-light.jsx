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
		"content": `<style>.qax9cwbfa {
  fill: currentColor;
  d: path("M220.24 100.24a6 6 0 0 1-8.48 0L174 62.49V192a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h138V62.49l-37.76 37.75a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 0 1 0 8.48");
}
</style><path class="qax9cwbfa"/>`,
		"fallback": "ph:arrow-elbow-right-up-light",
	});
}

export default Component;
