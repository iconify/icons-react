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
		"content": `<style>.iszryo-3z {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.875 1.75h6.25q2.123 0 3.624 1.501t1.501 3.624v10.25q0 2.123-1.501 3.624t-3.624 1.501h-6.25q-2.123 0-3.624-1.501T3.75 17.125V6.875q0-2.123 1.501-3.624T8.875 1.75M9.75 10h-1q-2 0-2 2t2 2h1q2 0 2-2t-2-2m4.5 0q-2 0-2 2t2 2h1q2 0 2-2t-2-2z");
}
</style><path class="iszryo-3z"/>`,
		"fallback": "uix-solid:gfci-outlet",
	});
}

export default Component;
