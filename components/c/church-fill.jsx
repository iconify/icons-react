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
		"content": `<style>.anokys4qu {
  fill: currentColor;
  d: path("M13 4h1a1 1 0 0 1 0 2h-1v.586l3.707 3.707A1 1 0 0 1 17 11v1.382l1.447.724c1.075.537 2.552 1.546 2.553 2.894v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3c.001-1.348 1.478-2.357 2.553-2.894L7 12.382V11c0-.265.105-.52.293-.707L11 6.586V6h-1a1 1 0 0 1 0-2h1V3a1 1 0 0 1 2 0Z");
}
</style><path class="anokys4qu"/>`,
		"fallback": "coolicons:church-fill",
	});
}

export default Component;
