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
		"content": `<style>.jn7d_4b5o {
  fill: currentColor;
  d: path("M216 68h-84l-26.67-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V88a20 20 0 0 0-20-20M44 68h48l16 12l-16 12H44Zm168 128H44v-80h49.33a20.12 20.12 0 0 0 12-4L132 92h80Z");
}
</style><path class="jn7d_4b5o"/>`,
		"fallback": "ph:folder-notch-bold",
	});
}

export default Component;
