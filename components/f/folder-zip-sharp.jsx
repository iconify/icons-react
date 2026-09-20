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
		"content": `<style>.y14_02bqr {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14zm12-2h2v-2h2v-2h-2v-2h2v-2h-2V8h-2v2h2v2h-2v2h2v2h-2z");
}
</style><path class="y14_02bqr"/>`,
		"fallback": "material-symbols:folder-zip-sharp",
	});
}

export default Component;
