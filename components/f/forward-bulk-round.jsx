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
		"content": `<style>.i_hz9gztg {
  fill: currentColor;
  d: path("M18.586 10H7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h6a1 1 0 0 1 0 2H7a5 5 0 0 1-5-5v-2a5 5 0 0 1 5-5h11.586l-2.293-2.293a.999.999 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a.999.999 0 1 1-1.414-1.414Z");
}
</style><path class="i_hz9gztg"/>`,
		"fallback": "coolicons:forward-bulk-round",
	});
}

export default Component;
