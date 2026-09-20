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
		"content": `<style>.vk24ynbje {
  fill: currentColor;
  d: path("M174 148a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-82-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m146 22v24a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14v-22.87a111.44 111.44 0 0 1 36.28-82.37L27.76 52.24a6 6 0 1 1 8.48-8.48l27.37 27.36a108.6 108.6 0 0 1 64-21.12h.39a109.17 109.17 0 0 1 64.58 20.93l27.18-27.17a6 6 0 0 1 8.48 8.48l-26.31 26.31c1.26 1.15 2.5 2.32 3.72 3.53A109.3 109.3 0 0 1 238 160m-12 0a98 98 0 0 0-98-98h-.35C73.81 62.19 30 106.66 30 161.13V184a2 2 0 0 0 2 2h192a2 2 0 0 0 2-2Z");
}
</style><path class="vk24ynbje"/>`,
		"fallback": "ph:android-logo-light",
	});
}

export default Component;
