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
		"content": `<style>.hgix6k0rl {
  fill: currentColor;
  d: path("M12.5 11.5h-1v2.71l1.64 1.64l.71-.71l-1.35-1.35z");
}

.vxnzx6r9m {
  fill: currentColor;
  d: path("M19 6h-1V1H6v5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 3h8v3H8zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5");
}
</style><path class="vxnzx6r9m"/><path class="hgix6k0rl"/>`,
		"fallback": "ic:baseline-punch-clock",
	});
}

export default Component;
