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
		"content": `<style>.u4uai7b_n {
  fill: currentColor;
  d: path("M5 21v-4.192q1.929-1.568 2.848-3.295t1.479-3.84H6.866V3h3.788v2.827h2.712V3h3.788v6.673h-2.487q.58 2.114 1.48 3.84T19 16.809V21z");
}
</style><path class="u4uai7b_n"/>`,
		"fallback": "material-symbols-light:chess-rook-sharp",
	});
}

export default Component;
