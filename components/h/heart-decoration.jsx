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
		"content": `<style>.e8509fbtj {
  fill: var(--svg-color--ff5a79, #ff5a79);
  d: path("M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30s30-13.4 30-30S48.6 2 32 2m0 48c-1.4-1.8-20.5-12.9-16.6-25.2c3.5-11.1 15.1-6.6 16.6-.6c1.1-5.6 12.9-10.7 16.6.6C52.5 36.9 33.4 48.6 32 50");
}
</style><path class="e8509fbtj"/>`,
		"fallback": "emojione:heart-decoration",
	});
}

export default Component;
