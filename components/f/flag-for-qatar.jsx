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
		"content": `<style>.svfmst8za {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M4 32c0-11.168 6.574-20.826 16.054-25.317L28.066 8.4l-9.833 2.949l9.833 2.95l-9.833 2.95l9.833 2.95l-9.833 2.95l9.833 2.949l-9.833 2.95L28.066 32l-9.833 2.95l9.833 2.95l-9.833 2.949l9.833 2.95l-9.833 2.95l9.833 2.95l-9.833 2.95l9.833 2.949l-8.01 1.719C10.575 52.828 4 43.169 4 32");
}
</style><path class="svfmst8za"/>`,
		"fallback": "emojione-monotone:flag-for-qatar",
	});
}

export default Component;
