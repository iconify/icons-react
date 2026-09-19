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
		"content": `<style>.n19rjccuv {
  fill: var(--svg-color--333, #333);
  d: path("M2 2h60v60H2z");
}
</style><path class="n19rjccuv"/>`,
		"fallback": "emojione:black-large-square",
	});
}

export default Component;
