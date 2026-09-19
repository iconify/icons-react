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
		"content": `<style>.ao1eh_btz {
  cx: 24px;
  cy: 32px;
  r: 16px;
  fill: var(--svg-color--ffe62e, #ffe62e);
}

.u-85q7evm {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--42ade2, #42ade2);
}
</style><circle class="u-85q7evm"/><circle class="ao1eh_btz"/>`,
		"fallback": "emojione:flag-for-flag-palau",
	});
}

export default Component;
