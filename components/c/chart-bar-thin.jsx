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
		"content": `<style>.k6fm2f_9g {
  fill: currentColor;
  d: path("M224 204h-12V40a4 4 0 0 0-4-4h-56a4 4 0 0 0-4 4v44H96a4 4 0 0 0-4 4v44H48a4 4 0 0 0-4 4v68H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8M156 44h48v160h-48Zm-56 48h48v112h-48Zm-48 48h40v64H52Z");
}
</style><path class="k6fm2f_9g"/>`,
		"fallback": "ph:chart-bar-thin",
	});
}

export default Component;
