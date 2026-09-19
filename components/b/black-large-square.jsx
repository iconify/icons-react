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
		"content": `<style>.cbs_dha_p {
  fill: currentColor;
  d: path("M2 2h60v60H2z");
}
</style><path class="cbs_dha_p"/>`,
		"fallback": "emojione-monotone:black-large-square",
	});
}

export default Component;
