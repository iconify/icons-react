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
		"content": `<style>.rxws6p8ni {
  fill: currentColor;
  d: path("m234.83 125.17l-96-96A4 4 0 0 0 132 32v44h-28a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h28v44a4 4 0 0 0 2.47 3.7a4 4 0 0 0 4.36-.87l96-96a4 4 0 0 0 0-5.66M140 214.34V176a4 4 0 0 0-4-4h-28V84h28a4 4 0 0 0 4-4V41.66L226.34 128ZM44 80v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0m32 0v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0");
}
</style><path class="rxws6p8ni"/>`,
		"fallback": "ph:arrow-fat-lines-right-thin",
	});
}

export default Component;
