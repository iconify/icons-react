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
		"content": `<style>.qfx6ifnbb {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2zM10 5.5v6H8.5V7H7V5.5zm5 6h-1.75L14.62 7H12V5.5h3.5c.67 0 1.15.65.96 1.29zm.5 2.5H17v1.5h-1.5z");
}
</style><path class="qfx6ifnbb"/>`,
		"fallback": "ic:baseline-17mp",
	});
}

export default Component;
