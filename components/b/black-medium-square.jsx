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
		"content": `<style>.e-igv2b5v {
  fill: var(--svg-color--787878, #787878);
  d: path("M44.25 27.33c0-1.5-1-1.9-6.9-1.7c-4.9.2-7.3.8-8.8 2.6s-1.9 5.4-1.9 9.8c0 3.1 0 5.9 1.6 5.9c2.2 0 2.2-5 4-7.9c3.3-5.5 12-6.7 12-8.7");
}

.qu94h2bsv {
  fill: var(--svg-color--575757, #575757);
  d: path("M22.75 20.03h82.2c1.6 0 2.9 1.3 2.9 2.9v82.2c0 1.6-1.3 2.9-2.9 2.9h-82.2c-1.6 0-2.9-1.3-2.9-2.9v-82.1a2.863 2.863 0 0 1 2.72-3z");
}

.x8nd9-bcw {
  fill: var(--svg-color--424242, #424242);
  d: path("M22.65 20.03h74.9c1.53.03 2.77 1.27 2.8 2.8v74.9a2.86 2.86 0 0 1-2.8 2.8h-74.9a2.86 2.86 0 0 1-2.8-2.8v-74.8a2.824 2.824 0 0 1 2.74-2.9z");
}
</style><path class="qu94h2bsv"/><path class="x8nd9-bcw"/><path class="e-igv2b5v"/>`,
		"fallback": "noto:black-medium-square",
	});
}

export default Component;
