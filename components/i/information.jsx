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
		"content": `<style>.wkgxswb2s {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m5 49.75H27v-24h10zm-5-29.5a5 5 0 1 1 0-10a5 5 0 0 1 0 10");
}
</style><path class="wkgxswb2s"/>`,
		"fallback": "emojione-monotone:information",
	});
}

export default Component;
