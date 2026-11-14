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
		"content": `<style>.zf2opp0ki {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7 6.75h10q2.175 0 3.712 1.538Q22.25 9.825 22.25 12t-1.538 3.712Q19.175 17.25 17 17.25H7q-2.175 0-3.712-1.538Q1.75 14.175 1.75 12t1.538-3.712Q4.825 6.75 7 6.75M4.5 12q0 1.036.732 1.768q.732.733 1.768.733t1.768-.733T9.5 12q.001-1.036-.732-1.768Q8.036 9.499 7 9.499t-1.768.733T4.5 12m10 0q0-2.5 2.5-2.5t2.5 2.5t-2.5 2.5t-2.5-2.5");
}
</style><path class="zf2opp0ki"/>`,
		"fallback": "uix-solid:elastic-band",
	});
}

export default Component;
