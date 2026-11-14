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
		"content": `<style>.t--zzn4xg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m16.969 2.684l4.597 4.597q.733.732.733 1.768q0 1.035-.733 1.767q-.732.733-1.767.733q-1.036 0-1.768-.733l-1.768-1.768l-7.208 7.208q.822 1.299-.477 2.597l-2.475 2.475q-1.59 1.591-3.181 0t0-3.181l2.475-2.475q1.299-1.299 2.597-.477l7.208-7.207l-1.768-1.769q-.733-.732-.733-1.767q0-1.036.733-1.768q.732-.733 1.767-.733q1.036 0 1.768.733");
}
</style><path class="t--zzn4xg"/>`,
		"fallback": "uix-solid:branding-iron",
	});
}

export default Component;
