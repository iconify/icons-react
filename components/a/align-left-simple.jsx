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
		"content": `<style>.oepgvdb7e {
  fill: currentColor;
  d: path("M40 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m200 40v64a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h152a16 16 0 0 1 16 16m-16 64V96H72v64z");
}
</style><path class="oepgvdb7e"/>`,
		"fallback": "ph:align-left-simple",
	});
}

export default Component;
