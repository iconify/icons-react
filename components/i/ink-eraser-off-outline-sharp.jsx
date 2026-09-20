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
		"content": `<style>.qih21db5p {
  fill: currentColor;
  d: path("M19.775 22.625L15.05 17.9L13 20H4.75L1.2 16.45l6.1-6.3l-5.925-5.925L2.8 2.8l18.4 18.4zM5.6 18h6.55l1.475-1.525L8.7 11.55L4 16.4zm12.275-2.975L16.45 13.6L20 9.95L15.05 5L11.5 8.65l-1.4-1.4l4.9-5.1l7.8 7.8zM11.175 14");
}
</style><path class="qih21db5p"/>`,
		"fallback": "material-symbols:ink-eraser-off-outline-sharp",
	});
}

export default Component;
