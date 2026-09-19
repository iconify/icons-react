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
		"content": `<style>.k6u8ygnbi {
  fill: currentColor;
  d: path("M5 20h14v-2H5zm0-10h4v6h6v-6h4l-7-7z");
}
</style><path class="k6u8ygnbi"/>`,
		"fallback": "ic:baseline-upload",
	});
}

export default Component;
