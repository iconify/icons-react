import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ikmse57kr {
  fill: currentColor;
  d: path("M56 2L18.8 42.909L8 34.729H2L18.8 62L62 2z");
}
</style><path class="ikmse57kr"/>`,
		"fallback": "emojione-monotone:check-mark",
	});
}

export default Component;
