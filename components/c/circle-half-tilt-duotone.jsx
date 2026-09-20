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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.lnt2tfbqx {
  d: path("M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46M65.78 65.77a88.08 88.08 0 0 1 118.52-5.38L60.38 184.31a88 88 0 0 1 5.4-118.54m124.44 124.46a88.1 88.1 0 0 1-118.52 5.38L195.62 71.69a88 88 0 0 1-5.4 118.54");
}

.mr_i8tbvy {
  d: path("M195.88 195.88a96 96 0 0 1-135.76 0L195.88 60.12a96 96 0 0 1 0 135.76");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="mr_i8tbvy"/><path class="lnt2tfbqx"/></g>`,
		"fallback": "ph:circle-half-tilt-duotone",
	});
}

export default Component;
