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
		"content": `<style>.w7cyw3bdi {
  fill: currentColor;
  d: path("m15.83 1.01l-4.11.42C8.47 1.75 6 4.48 6 7.75s2.47 6 5.72 6.33l1.9.19l-.56.85c-.35-.08-.7-.12-1.06-.12c-2.76 0-5 2.24-5 5v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2c0-1.67-.83-3.15-2.09-4.06l.97-1.45c1.14.07 2.12-.83 2.12-1.99V3c0-1.17-1-2.09-2.17-1.99");
}
</style><path class="w7cyw3bdi"/>`,
		"fallback": "ic:baseline-nest-cam-wired-stand",
	});
}

export default Component;
