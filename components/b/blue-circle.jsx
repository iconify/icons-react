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
		"content": `<style>.zftiqseks {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--0071bc, #0071bc);
}
</style><circle class="zftiqseks"/>`,
		"fallback": "emojione:blue-circle",
	});
}

export default Component;
