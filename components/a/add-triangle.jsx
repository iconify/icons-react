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
		"content": `<style>.pd_21ybya {
  fill: currentColor;
  d: path("M1 20L12 1l11 19zm10-3.5h2v-2h2v-2h-2v-2h-2v2H9v2h2z");
}
</style><path class="pd_21ybya"/>`,
		"fallback": "material-symbols:add-triangle",
	});
}

export default Component;
