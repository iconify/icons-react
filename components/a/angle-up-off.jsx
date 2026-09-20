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
		"content": `<style>.b7yw7z1gn {
  d: path("m15.36 13.268l-6-5c-1.025-.853.256-2.39 1.28-1.536l6 5c1.024.853-.256 2.39-1.28 1.536");
}

.bkdjfsbgo {
  d: path("m3.36 11.732l6-5c1.024-.854 2.305.683 1.28 1.536l-6 5c-1.024.854-2.305-.683-1.28-1.536");
}

.cuyn6tgcc {
  fill: currentColor;
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path class="b7yw7z1gn"/><path class="bkdjfsbgo"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:angle-up-off",
	});
}

export default Component;
