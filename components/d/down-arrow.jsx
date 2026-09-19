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
		"content": `<style>.qg48rh1dy {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 47L16 33.695h10.857V15h10.285v18.695H48z");
}
</style><path class="qg48rh1dy"/>`,
		"fallback": "emojione-monotone:down-arrow",
	});
}

export default Component;
