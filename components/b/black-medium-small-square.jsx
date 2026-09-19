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
		"content": `<style>.fb3_dhlcc {
  fill: currentColor;
  d: path("M12 12h40v40H12z");
}
</style><path class="fb3_dhlcc"/>`,
		"fallback": "emojione-monotone:black-medium-small-square",
	});
}

export default Component;
