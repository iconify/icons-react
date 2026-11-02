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
		"content": `<style>.v64votbmg {
  fill: currentColor;
  d: path("M12 6h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m6 5a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm-6 5h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}
</style><path class="v64votbmg"/>`,
		"fallback": "coolicons:divide-fill-sharp",
	});
}

export default Component;
