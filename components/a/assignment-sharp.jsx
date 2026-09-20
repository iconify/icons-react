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
		"content": `<style>.ewt6qubff {
  fill: currentColor;
  d: path("M3 21V3h6.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H21v18zm4-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7zm5.538-4.962q.212-.213.212-.538t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212t.538-.213");
}
</style><path class="ewt6qubff"/>`,
		"fallback": "material-symbols:assignment-sharp",
	});
}

export default Component;
