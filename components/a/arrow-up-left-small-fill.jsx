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
		"content": `<style>.u-qr-tb_l {
  fill: currentColor;
  d: path("m10.414 9l6.293 6.293a.999.999 0 1 1-1.414 1.414L9 10.414V14a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2Z");
}
</style><path class="u-qr-tb_l"/>`,
		"fallback": "coolicons:arrow-up-left-small-fill",
	});
}

export default Component;
