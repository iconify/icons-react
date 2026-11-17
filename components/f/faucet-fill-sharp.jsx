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
		"content": `<style>.a-2dtwutd {
  fill: currentColor;
  d: path("M13 2a1 1 0 0 1 0 2h-2v1h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1H4v1a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0v1h5V4H7a1 1 0 0 1 0-2Zm9 17a3 3 0 1 1-6 0c0-.774.371-1.494.825-2.1c.436-.581.955-1.095 1.468-1.607a1 1 0 0 1 1.414 0c.983.982 2.292 2.233 2.293 3.707");
}
</style><path class="a-2dtwutd"/>`,
		"fallback": "coolicons:faucet-fill-sharp",
	});
}

export default Component;
