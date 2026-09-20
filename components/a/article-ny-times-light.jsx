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
		"content": `<style>.nshu0rb9t {
  fill: currentColor;
  d: path("M128 98h104a6 6 0 0 1 0 12H128a6 6 0 0 1 0-12m104 32H128a6 6 0 0 0 0 12h104a6 6 0 0 0 0-12m0 32H80a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12m0 32H80a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12M96 142a6 6 0 0 0 0-12H86V62h36v10a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6H32a6 6 0 0 0-6 6v16a6 6 0 0 0 12 0V62h36v68H64a6 6 0 0 0 0 12Z");
}
</style><path class="nshu0rb9t"/>`,
		"fallback": "ph:article-ny-times-light",
	});
}

export default Component;
