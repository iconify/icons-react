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
		"content": `<style>.kadpm5bkp {
  fill: currentColor;
  d: path("M19 13H5v-2h14z");
}
</style><path class="kadpm5bkp"/>`,
		"fallback": "ic:baseline-remove",
	});
}

export default Component;
