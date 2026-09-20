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
		"content": `<style>.lhievvbft {
  fill: currentColor;
  d: path("M4 20V4h2v16zm14 0v-7H8v-2h10V4h2v16z");
}
</style><path class="lhievvbft"/>`,
		"fallback": "material-symbols:format-text-clip",
	});
}

export default Component;
