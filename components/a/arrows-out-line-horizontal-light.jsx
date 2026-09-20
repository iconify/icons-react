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
		"content": `<style>.dmaezgbfu {
  fill: currentColor;
  d: path("M134 40v176a6 6 0 0 1-12 0V40a6 6 0 0 1 12 0m-38 82H30.49l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48l32 32a6 6 0 0 0 8.48-8.48L30.49 134H96a6 6 0 0 0 0-12m148.24 1.76l-32-32a6 6 0 0 0-8.48 8.48L225.51 122H160a6 6 0 0 0 0 12h65.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48");
}
</style><path class="dmaezgbfu"/>`,
		"fallback": "ph:arrows-out-line-horizontal-light",
	});
}

export default Component;
