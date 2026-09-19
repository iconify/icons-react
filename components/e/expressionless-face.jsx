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
		"content": `<style>.r4wibjb1v {
  fill: var(--svg-color--664e27, #664e27);
  d: path("M40 48H24c-1.5 0-1.5-4 0-4h16c1.5 0 1.5 4 0 4M27.1 32h-16c-1.5 0-1.5-4 0-4h16c1.5 0 1.5 4 0 4m25.8 0h-16c-1.5 0-1.5-4 0-4h16c1.5 0 1.5 4 0 4");
}

.rhvdvboaq {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--ffdd67, #ffdd67);
}
</style><circle class="rhvdvboaq"/><path class="r4wibjb1v"/>`,
		"fallback": "emojione:expressionless-face",
	});
}

export default Component;
