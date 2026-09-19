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
		"content": `<style>.poyjmcwjh {
  fill: currentColor;
  d: path("M2 2v60h60V2zm52 52H10V10h44z");
}
</style><path class="poyjmcwjh"/>`,
		"fallback": "emojione-monotone:black-square-button",
	});
}

export default Component;
