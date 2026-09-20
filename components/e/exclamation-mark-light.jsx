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
		"content": `<style>.gax97-omy {
  fill: currentColor;
  d: path("M142 200a14 14 0 1 1-14-14a14 14 0 0 1 14 14m-14-42a6 6 0 0 0 6-6V48a6 6 0 0 0-12 0v104a6 6 0 0 0 6 6");
}
</style><path class="gax97-omy"/>`,
		"fallback": "ph:exclamation-mark-light",
	});
}

export default Component;
