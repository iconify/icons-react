import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bahdv8jzm {
  fill: currentColor;
  d: path("M13.5 11.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m10.5-20a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m10.5-30a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6");
}
</style><path class="bahdv8jzm"/>`,
		"fallback": "fluent:dialpad-48-filled",
	});
}

export default Component;
