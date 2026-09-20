import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bi80bugoc {
  fill: var(--svg-color--fff, #fff);
  d: path("M62.79 25C42.87 25 30 40.47 30 64.42s12.87 39.43 32.79 39.43s32.79-15.47 32.79-39.43C95.59 40.47 82.71 25 62.79 25m0 60.21c-9.53 0-12.91-11.2-12.91-20.79c0-9.58 3.38-20.78 12.91-20.78s12.92 11.2 12.92 20.78c0 9.59-3.39 20.79-12.92 20.79");
}
</style><path class="bi80bugoc"/>`,
		"fallback": "noto-v1:digit-zero",
	});
}

export default Component;
