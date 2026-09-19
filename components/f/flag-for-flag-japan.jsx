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
		"content": `<style>.do2tny6mn {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--f5f5f5, #f5f5f5);
}

.koquvbcvx {
  cx: 32px;
  cy: 32px;
  r: 12px;
  fill: var(--svg-color--ed4c5c, #ed4c5c);
}
</style><circle class="do2tny6mn"/><circle class="koquvbcvx"/>`,
		"fallback": "emojione:flag-for-flag-japan",
	});
}

export default Component;
