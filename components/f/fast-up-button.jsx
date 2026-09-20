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
		"content": `<style>.kcehd9pft {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M98.99 121.76L67.28 66.84h31.71L64 6.24l-34.99 60.6h31.71l-31.71 54.92z");
}
</style><path class="kcehd9pft"/>`,
		"fallback": "noto-v1:fast-up-button",
	});
}

export default Component;
