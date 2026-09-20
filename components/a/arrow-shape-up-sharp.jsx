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
		"content": `<style>.u0jcrbcgr {
  fill: currentColor;
  d: path("M8 21v-6H3l9-11l9 11h-5v6z");
}
</style><path class="u0jcrbcgr"/>`,
		"fallback": "material-symbols:arrow-shape-up-sharp",
	});
}

export default Component;
