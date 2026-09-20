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
		"content": `<style>.lsjc8gh9f {
  fill: currentColor;
  d: path("M6 2c.597 0 1.134.262 1.5.677A2 2 0 0 1 10.732 5H12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.268A2 2 0 0 1 6 2M5 4a1 1 0 0 0 1 1h1V4a1 1 0 0 0-2 0m3 2v2h4V6zM7 6H3v2h4zM4 9v3a1 1 0 0 0 1 1h2V9zm4 4h2a1 1 0 0 0 1-1V9H8zm2-9a1 1 0 0 0-2 0v1h1a1 1 0 0 0 1-1");
}
</style><path class="lsjc8gh9f"/>`,
		"fallback": "fluent:gift-16-regular",
	});
}

export default Component;
