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
		"content": `<style>.ty9a486eq {
  fill: currentColor;
  d: path("M4 17V7h2v4h6V7h2v10h-2v-4H6v4zm14-2v-2h-2v-2h2V9h2v2h2v2h-2v2z");
}
</style><path class="ty9a486eq"/>`,
		"fallback": "material-symbols:h-plus-mobiledata-outline",
	});
}

export default Component;
