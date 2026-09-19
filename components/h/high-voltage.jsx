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
		"content": `<style>.nkay9-vhx {
  fill: currentColor;
  d: path("m45 2l-9.396 2.48L29.298 2L19 36.354h10.865L20.352 62L43.65 27.648H29.626z");
}
</style><path class="nkay9-vhx"/>`,
		"fallback": "emojione-monotone:high-voltage",
	});
}

export default Component;
