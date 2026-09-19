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
		"content": `<style>.ih9t5ij0a {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M20 48h-6v-8h6zm10 0h-6V32h6zm10 0h-6V24h6zm10 0h-6V16h6z");
}
</style><path class="ih9t5ij0a"/>`,
		"fallback": "emojione-monotone:antenna-bars",
	});
}

export default Component;
