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
		"content": `<style>.udswgk8qa {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M98.25 98.18L44.51 89.9l14.18-14.18l-28.94-28.93l16.96-16.96l28.94 28.93l14.32-14.32z");
}
</style><path class="udswgk8qa"/>`,
		"fallback": "noto-v1:down-right-arrow",
	});
}

export default Component;
