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
		"content": `<style>.v1rq5fmtq {
  fill: currentColor;
  d: path("M6 18v-5q-1.65 0-2.825-1.175T2 9t1.175-2.825T6 5h8v2h-2v11h-2V7H8v11zm12 2l-4-4l1.4-1.4l1.6 1.575V5h2v11.175l1.6-1.6L22 16zM6 11V7q-.825 0-1.412.588T4 9t.588 1.413T6 11m0-2");
}
</style><path class="v1rq5fmtq"/>`,
		"fallback": "material-symbols:format-textdirection-vertical-outline",
	});
}

export default Component;
