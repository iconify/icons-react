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
		"content": `<style>.nlddcxuws {
  fill: var(--svg-color--fff, #fff);
  d: path("m32 39.2l9.9 7.1l-3.8-11.5l9.9-7.1H35.8L32 16.3l-3.8 11.4H16l9.8 7.1l-3.7 11.5z");
}

.u-85q7evm {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--42ade2, #42ade2);
}
</style><circle class="u-85q7evm"/><path class="nlddcxuws"/>`,
		"fallback": "emojione:flag-for-flag-somalia",
	});
}

export default Component;
