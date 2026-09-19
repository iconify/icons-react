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
		"content": `<style>.cwd8uq_lx {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-17.755 8.366h35.511a28.16 28.16 0 0 1 7.628 9.834H6.616a28.2 28.2 0 0 1 7.629-9.834m35.511 43.267H14.244A28.16 28.16 0 0 1 6.617 43.8h50.768a28.2 28.2 0 0 1-7.629 9.833");
}
</style><path class="cwd8uq_lx"/>`,
		"fallback": "emojione-monotone:flag-for-flag-costa-rica",
	});
}

export default Component;
