import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.crsuu8bdv {
  d: path("m4.64 6.732l6 5c1.024.853-.256 2.39-1.28 1.536l-6-5c-1.024-.853.256-2.39 1.28-1.536");
}

.cuyn6tgcc {
  fill: currentColor;
}

.s4tqv6u-n {
  d: path("m16.64 8.268l-6 5c-1.024.854-2.304-.683-1.28-1.536l6-5c1.024-.854 2.305.683 1.28 1.536");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path class="s4tqv6u-n"/><path class="crsuu8bdv"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:angle-down-off",
	});
}

export default Component;
