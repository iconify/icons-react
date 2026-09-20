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
		"content": `<style>.d0oqrfb3n {
  fill: currentColor;
  d: path("m19 9l-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75L23 5l-2.75 1.25L19 9Zm.775 13.6L1.4 4.225L2.8 2.8l4.65 4.65L9 4l2.5 5.5L17 12l-3.45 1.55l4.2 4.2L19 15l1.25 2.75L23 19l-2.75 1.25l.925.95l-1.4 1.4ZM9 20l-2.5-5.5L1 12l3.675-1.675l6 6L9 20Z");
}
</style><path class="d0oqrfb3n"/>`,
		"fallback": "material-symbols:astrophotography-off-sharp",
	});
}

export default Component;
