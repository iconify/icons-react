import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.q1qpbdczs {
  fill: var(--svg-color--00e98d, #00e98d);
  d: path("M3.93 16.655h9.932V21H3.931z");
}

.urjii0bqn {
  fill: var(--svg-color--fff, #fff);
  d: path("M20.07 3H9.516v10.552H20.07V9.828h-6.207V6.724h6.207z");
}
</style><g class="ft5dv1b6b"><path class="q1qpbdczs"/><path class="urjii0bqn"/></g>`,
		"fallback": "token-branded:fdusd",
	});
}

export default Component;
