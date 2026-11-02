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
		"content": `<style>.wnu9zac9f {
  fill: currentColor;
  d: path("M2 7V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v6a8 8 0 0 1-16 0V8H3a1 1 0 0 1-1-1m4 1v6a6 6 0 1 0 12 0V8Zm2.315 4.443a4.001 4.001 0 0 1 7.37 3.114a4.001 4.001 0 0 1-7.37-3.114");
}
</style><path class="wnu9zac9f"/>`,
		"fallback": "coolicons:cctv-fill-sharp",
	});
}

export default Component;
