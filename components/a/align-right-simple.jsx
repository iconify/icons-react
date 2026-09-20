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
		"content": `<style>.yomprjbwt {
  fill: currentColor;
  d: path("M232 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m-32 40v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h152a16 16 0 0 1 16 16m-16 0H32v64h152Z");
}
</style><path class="yomprjbwt"/>`,
		"fallback": "ph:align-right-simple",
	});
}

export default Component;
