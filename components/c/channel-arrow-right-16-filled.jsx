import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kz4i2rbns {
  fill: currentColor;
  d: path("M10.5 6a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m.354 2.146a.5.5 0 1 0-.707.708L11.293 10H8.5a.5.5 0 0 0 0 1h2.793l-1.146 1.146a.5.5 0 1 0 .707.707l2.002-2.001a.503.503 0 0 0-.002-.706zM8.5 1a2 2 0 0 1 2 2v2a5.5 5.5 0 0 0-5.478 5H3.5a2 2 0 0 1-2-2V5.678a1.75 1.75 0 1 0 .13-3.389A2 2 0 0 1 3.5 1zm-4 5a.5.5 0 0 0 0 1H6a.5.5 0 0 0 0-1zm0-2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM2 3.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5");
}
</style><path class="kz4i2rbns"/>`,
		"fallback": "fluent:channel-arrow-right-16-filled",
	});
}

export default Component;
