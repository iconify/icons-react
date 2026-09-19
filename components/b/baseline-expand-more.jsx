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
		"content": `<style>.jbcn9dbsl {
  fill: currentColor;
  d: path("M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6z");
}
</style><path class="jbcn9dbsl"/>`,
		"fallback": "ic:baseline-expand-more",
	});
}

export default Component;
