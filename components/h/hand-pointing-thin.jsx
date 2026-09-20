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
		"content": `<style>.wkzb1he0u {
  fill: currentColor;
  d: path("M196 92a23.88 23.88 0 0 0-16.07 6.19A24 24 0 0 0 140 82.13V44a24 24 0 0 0-48 0v94l-11.25-18.06A24 24 0 0 0 39.2 144l4.68 8.25C61.21 182.8 72.66 203 85.66 216.33C99.28 230.3 113.86 236 136 236a84.09 84.09 0 0 0 84-84v-36a24 24 0 0 0-24-24m16 60a76.09 76.09 0 0 1-76 76c-40 0-51.35-20.08-85.16-79.71L46.15 140a16 16 0 0 1 27.71-16a1 1 0 0 1 .07.12l18.68 30A4 4 0 0 0 100 152V44a16 16 0 0 1 32 0v68a4 4 0 0 0 8 0v-12a16 16 0 0 1 32 0v20a4 4 0 0 0 8 0v-4a16 16 0 0 1 32 0Z");
}
</style><path class="wkzb1he0u"/>`,
		"fallback": "ph:hand-pointing-thin",
	});
}

export default Component;
