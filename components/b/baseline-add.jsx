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
		"content": `<style>.dzdozth7e {
  fill: currentColor;
  d: path("M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z");
}
</style><path class="dzdozth7e"/>`,
		"fallback": "ic:baseline-add",
	});
}

export default Component;
