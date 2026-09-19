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
		"content": `<style>.x2xu2umfc {
  fill: currentColor;
  d: path("M2 26h60v12H2z");
}
</style><path class="x2xu2umfc"/>`,
		"fallback": "emojione-monotone:heavy-minus-sign",
	});
}

export default Component;
