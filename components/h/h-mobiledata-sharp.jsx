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
		"content": `<style>.wff0krbrj {
  fill: currentColor;
  d: path("M7 17V7h2v4h6V7h2v10h-2v-4H9v4z");
}
</style><path class="wff0krbrj"/>`,
		"fallback": "material-symbols:h-mobiledata-sharp",
	});
}

export default Component;
