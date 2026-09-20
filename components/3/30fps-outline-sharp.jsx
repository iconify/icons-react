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
		"content": `<style>.snf7v8m6m {
  fill: currentColor;
  d: path("M2 19v-3h6v-2.5H2v-3h6V8H2V5h9v5.5L9.5 12l1.5 1.5V19zm13-3h4V8h-4zm-3 3V5h10v14z");
}
</style><path class="snf7v8m6m"/>`,
		"fallback": "material-symbols:30fps-outline-sharp",
	});
}

export default Component;
