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
		"content": `<style>.t719z7baa {
  fill: var(--svg-color--4189dd, #4189dd);
  d: path("M64 44c0 6.075-3.373 11-10 11H10C3.373 55 0 50.075 0 44V22c0-6.075 3.373-11 10-11h44c6.627 0 10 4.925 10 11z");
}

.yy-kfybew {
  cx: 25.654px;
  cy: 32.654px;
  r: 14.15px;
  fill: var(--svg-color--f9cb38, #f9cb38);
}
</style><path class="t719z7baa"/><circle class="yy-kfybew"/>`,
		"fallback": "emojione-v1:flag-for-palau",
	});
}

export default Component;
