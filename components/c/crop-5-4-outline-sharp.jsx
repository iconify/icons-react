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
		"content": `<style>.uymqj-bpz {
  fill: currentColor;
  d: path("M3 20V4h18v16zm2-2h14V6H5zm0 0V6z");
}
</style><path class="uymqj-bpz"/>`,
		"fallback": "material-symbols:crop-5-4-outline-sharp",
	});
}

export default Component;
