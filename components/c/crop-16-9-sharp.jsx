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
		"content": `<style>.twmi7nbnm {
  fill: currentColor;
  d: path("M3 17V7h18v10z");
}
</style><path class="twmi7nbnm"/>`,
		"fallback": "material-symbols:crop-16-9-sharp",
	});
}

export default Component;
