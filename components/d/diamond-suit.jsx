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
		"content": `<style>.g7_vbg8je {
  fill: var(--svg-color--e03a4d, #e03a4d);
  d: path("M56.28 32L32.14 63L8 32L32.14 1");
}
</style><path class="g7_vbg8je"/>`,
		"fallback": "emojione-v1:diamond-suit",
	});
}

export default Component;
