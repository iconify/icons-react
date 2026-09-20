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
		"content": `<style>.ybfz-dbjd {
  fill: currentColor;
  d: path("m7.5 21l-4-4l1.4-1.4l1.6 1.575V11H1V3h2v6h5.5v8.175l1.575-1.575L11.5 17zm9 0l-4-4l1.4-1.4l1.6 1.575V9H21V3h2v8h-5.5v6.2l1.575-1.6L20.5 17z");
}
</style><path class="ybfz-dbjd"/>`,
		"fallback": "material-symbols:arrow-or-edge-outline-sharp",
	});
}

export default Component;
