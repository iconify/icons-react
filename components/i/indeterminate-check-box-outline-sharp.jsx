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
		"content": `<style>.j6ufwm74y {
  fill: currentColor;
  d: path("M7.5 12.5h9v-1h-9zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="j6ufwm74y"/>`,
		"fallback": "material-symbols-light:indeterminate-check-box-outline-sharp",
	});
}

export default Component;
