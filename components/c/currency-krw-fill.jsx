import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k4o68sj3u {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m72 120h-18.58l-14 35a8 8 0 0 1-14.86 0L128 117.54L103.43 179a8 8 0 0 1-14.86 0l-14-35H56a8 8 0 0 1 0-16h12.18L56.57 99a8 8 0 1 1 14.86-6L96 154.46L120.57 93a8 8 0 0 1 14.86 0L160 154.46L184.57 93a8 8 0 1 1 14.86 6l-11.61 29H200a8 8 0 0 1 0 16");
}
</style><path class="k4o68sj3u"/>`,
		"fallback": "ph:currency-krw-fill",
	});
}

export default Component;
