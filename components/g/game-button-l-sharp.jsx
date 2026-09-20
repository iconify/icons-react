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
		"content": `<style>.y6o18dbap {
  fill: currentColor;
  d: path("M3 19V8.27q0-1.357.977-2.323t2.35-.966h11.346q1.373 0 2.35.966T21 8.269V19zm7.864-3.879h3.773v-.838h-2.918v-5.38h-.855z");
}
</style><path class="y6o18dbap"/>`,
		"fallback": "material-symbols-light:game-button-l-sharp",
	});
}

export default Component;
