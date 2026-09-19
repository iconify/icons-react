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
		"content": `<style>.hqsefccuh {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M8.447 47.113L47.113 8.447a28.2 28.2 0 0 1 8.402 8.382L16.83 55.516a28.2 28.2 0 0 1-8.383-8.403");
}
</style><path class="hqsefccuh"/>`,
		"fallback": "emojione-monotone:flag-for-congo-brazzaville",
	});
}

export default Component;
