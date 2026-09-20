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
		"content": `<style>.gm10x9bkt {
  fill: currentColor;
  d: path("M4 22v-5q2.025-1.625 3.05-3.525T8.5 10H8q-.825 0-1.412-.587T6 8V2h5v3h2V2h5v6q0 .825-.587 1.413T16 10h-.525q.425 1.575 1.45 3.475T20 17v5z");
}
</style><path class="gm10x9bkt"/>`,
		"fallback": "material-symbols:chess-rook",
	});
}

export default Component;
