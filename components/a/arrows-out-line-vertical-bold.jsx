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
		"content": `<style>.gtmpd10pe {
  fill: currentColor;
  d: path("M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M104.49 56.48L116 45v43a12 12 0 0 0 24 0V45l11.51 11.51a12 12 0 0 0 17-17l-32-32a12 12 0 0 0-17 0l-32 32a12 12 0 0 0 17 17Zm47 143L140 211v-43a12 12 0 0 0-24 0v43l-11.51-11.52a12 12 0 0 0-17 17l32 32a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17");
}
</style><path class="gtmpd10pe"/>`,
		"fallback": "ph:arrows-out-line-vertical-bold",
	});
}

export default Component;
