import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uwqn3sn0j {
  fill: currentColor;
  d: path("M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16m13.293-6.707a1 1 0 0 0 0 1.414L19.586 15H10a1 1 0 1 0 0 2h9.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0");
}
</style><path class="uwqn3sn0j"/>`,
		"fallback": "fluent:arrow-circle-right-32-filled",
	});
}

export default Component;
