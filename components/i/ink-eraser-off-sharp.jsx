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
		"content": `<style>.byevw6vdr {
  fill: currentColor;
  d: path("M19.775 22.625L15.05 17.9L13 20H4.75L1.2 16.45l6.1-6.3l-5.925-5.925L2.8 2.8l18.4 18.4zm-1.9-7.6L10.1 7.25l4.9-5.1l7.8 7.8z");
}
</style><path class="byevw6vdr"/>`,
		"fallback": "material-symbols:ink-eraser-off-sharp",
	});
}

export default Component;
