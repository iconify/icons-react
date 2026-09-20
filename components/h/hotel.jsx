import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e9tm073eb {
  fill: currentColor;
  d: path("M2 18V5h1v9h8.5V7H19q1.238 0 2.119.881T22 10v8h-1v-3H3v3zm3.5-6.502q-.615-.618-.615-1.5T5.502 8.5t1.5-.615t1.498.617t.616 1.5t-.618 1.498t-1.5.616t-1.498-.618");
}
</style><path class="e9tm073eb"/>`,
		"fallback": "material-symbols-light:hotel",
	});
}

export default Component;
