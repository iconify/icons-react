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
		"content": `<style>.tmyabj2wt {
  fill: currentColor;
  d: path("M3 21V3h6.2q.35-.9 1.1-1.45T12 1t1.7.55T14.8 3H21v18zm9.538-16.963q.212-.212.212-.537t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212t.538-.213m1.937 7.938Q15.5 10.95 15.5 9.5t-1.025-2.475T12 6T9.525 7.025T8.5 9.5t1.025 2.475T12 13t2.475-1.025M5 19h14v-1.15q-1.35-1.325-3.137-2.087T12 15t-3.863.763T5 17.85z");
}
</style><path class="tmyabj2wt"/>`,
		"fallback": "material-symbols:assignment-ind-sharp",
	});
}

export default Component;
