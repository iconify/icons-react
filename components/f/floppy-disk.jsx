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
		"content": `<style>.bcec7_bkv {
  fill: currentColor;
  d: path("M36 6h10v16H36z");
}

.fo9b9_bca {
  fill: currentColor;
  d: path("m61.293 9.293l-6.586-6.586C54.318 2.318 53.55 2 53 2H9v4H5V2H3c-.55 0-1 .45-1 1v58c0 .55.45 1 1 1h58c.55 0 1-.45 1-1V11c0-.55-.318-1.318-.707-1.707M52 58H12V34c0-1.1.9-2 2-2h36c1.1 0 2 .9 2 2zm0-36c0 1.1-.899 2-2 2H20c-1.1 0-2-.9-2-2V3h34zm7 36c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1z");
}

.m-g22wc6n {
  fill: currentColor;
  d: path("M17 36h30v2H17zm0 6h30v2H17zm0 6h30v2H17z");
}
</style><path class="bcec7_bkv"/><path class="fo9b9_bca"/><path class="m-g22wc6n"/>`,
		"fallback": "emojione-monotone:floppy-disk",
	});
}

export default Component;
