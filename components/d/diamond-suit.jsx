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
		"content": `<style>.lypxc0e1x {
  fill: var(--svg-color--ff5a79, #ff5a79);
  d: path("M2.018 32L32 2.02L61.98 32L32 61.981z");
}
</style><path class="lypxc0e1x"/>`,
		"fallback": "emojione:diamond-suit",
	});
}

export default Component;
