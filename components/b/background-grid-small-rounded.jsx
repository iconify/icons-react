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
		"content": `<style>.oa63uybwn {
  fill: currentColor;
  d: path("M5 21h1v-3H3v1q0 .825.588 1.413T5 21m3 0h3v-3H8zm5 0h3v-3h-3zm5 0h1q.825 0 1.413-.587T21 19v-1h-3zM3 6h3V3H5q-.825 0-1.412.588T3 5zm0 5h3V8H3zm0 5h3v-3H3zM8 6h3V3H8zm0 5h3V8H8zm0 5h3v-3H8zm5-10h3V3h-3zm0 5h3V8h-3zm0 5h3v-3h-3zm5-10h3V5q0-.825-.587-1.412T19 3h-1zm0 5h3V8h-3zm0 5h3v-3h-3z");
}
</style><path class="oa63uybwn"/>`,
		"fallback": "material-symbols:background-grid-small-rounded",
	});
}

export default Component;
