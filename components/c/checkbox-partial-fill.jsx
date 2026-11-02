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
		"content": `<style>.de4gx2b7p {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm12 5H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="de4gx2b7p"/>`,
		"fallback": "coolicons:checkbox-partial-fill",
	});
}

export default Component;
