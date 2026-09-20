import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.knyx3mo7h {
  fill: var(--svg-color--eee, #EEE);
  cx: 13.5px;
  cy: 18px;
  r: 8px;
}

.q0s_-hoas {
  fill: var(--svg-color--d00c33, #D00C33);
  d: path("M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9H0v9z");
}

.qh0ns0bse {
  fill: var(--svg-color--eee, #EEE);
  d: path("M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z");
}

.vb9xu-fyc {
  fill: var(--svg-color--d00c33, #D00C33);
  d: path("M13.5 10a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8z");
}
</style><path class="q0s_-hoas"/><path class="qh0ns0bse"/><circle class="knyx3mo7h"/><path class="vb9xu-fyc"/>`,
		"fallback": "twemoji:flag-for-greenland",
	});
}

export default Component;
