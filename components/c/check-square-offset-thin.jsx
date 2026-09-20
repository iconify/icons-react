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
		"content": `<style>.cowe5xbvp {
  fill: currentColor;
  d: path("M220 48v160a12 12 0 0 1-12 12h-72a4 4 0 0 1 0-8h72a4 4 0 0 0 4-4V48a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v96a4 4 0 0 1-8 0V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12M117.17 157.17L64 210.34l-21.17-21.17a4 4 0 0 0-5.66 5.66l24 24a4 4 0 0 0 5.66 0l56-56a4 4 0 0 0-5.66-5.66");
}
</style><path class="cowe5xbvp"/>`,
		"fallback": "ph:check-square-offset-thin",
	});
}

export default Component;
