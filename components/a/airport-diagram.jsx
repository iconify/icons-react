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
		"content": `<style>.gyx2z2b9b {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.125 1.75h-6.25q-2.123 0-3.624 1.501T3.75 6.875v10.25q0 2.123 1.501 3.624t3.624 1.501h6.25q2.123 0 3.624-1.501t1.501-3.624V6.875q0-2.123-1.501-3.624T15.125 1.75M9 5.25h6q2.25 0 2.25 2.25T15 9.75h-3.599l3 4.5H15q2.25 0 2.25 2.25T15 18.75H9q-2.25 0-2.25-2.25T9 14.25h3.599l-3-4.5H9q-2.25 0-2.25-2.25T9 5.25");
}
</style><path class="gyx2z2b9b"/>`,
		"fallback": "uix-solid:airport-diagram",
	});
}

export default Component;
