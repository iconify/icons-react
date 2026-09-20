import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ewwdgpbmu {
  fill: currentColor;
  d: path("M5 21V10h2v9h9v2zm5-5V5h2v9h9v2z");
}
</style><path class="ewwdgpbmu"/>`,
		"fallback": "material-symbols:arrows-more-down",
	});
}

export default Component;
