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
		"content": `<style>.knqhzhawj {
  fill: currentColor;
  d: path("M13 3v3h8a1 1 0 0 1 .832 1.555l-4 6A1 1 0 0 1 17 14h-1v6h5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h5v-6H7a1 1 0 0 1-.832-.445l-4-6A1 1 0 0 1 3 6h8V3a1 1 0 0 1 2 0m-5.465 9h1.078L7.279 8h-2.41Zm5.744 0l1.334-4H9.387l1.334 4Zm2.108 0h1.078l2.666-4h-2.41Z");
}
</style><path class="knqhzhawj"/>`,
		"fallback": "coolicons:control-tower-fill-sharp",
	});
}

export default Component;
