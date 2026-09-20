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
		"content": `<style>.aee-rob1o {
  fill: currentColor;
  d: path("M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z");
}
</style><path class="aee-rob1o"/>`,
		"fallback": "material-symbols-light:add-sharp",
	});
}

export default Component;
