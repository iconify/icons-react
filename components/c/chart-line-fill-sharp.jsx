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
		"content": `<style>.y2cv49iyg {
  fill: currentColor;
  d: path("M4 4v9.586l3.293-3.293a1 1 0 0 1 1.414 0L12 13.586l8.293-8.293a.999.999 0 1 1 1.414 1.414l-9 9a1 1 0 0 1-1.414 0L8 12.414l-4 4V19h17a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0");
}
</style><path class="y2cv49iyg"/>`,
		"fallback": "coolicons:chart-line-fill-sharp",
	});
}

export default Component;
