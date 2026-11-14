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
		"content": `<style>.ws-oeibkb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.375 3.25h7.25q2.123 0 3.624 1.501t1.501 3.624v7.25q0 2.123-1.501 3.624t-3.624 1.501h-7.25q-2.123 0-3.624-1.501T3.25 15.625v-7.25q0-2.123 1.501-3.624T8.375 3.25");
}
</style><path class="ws-oeibkb"/>`,
		"fallback": "uix-solid:checkbox",
	});
}

export default Component;
