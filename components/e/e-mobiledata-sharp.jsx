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
		"content": `<style>.vxbclqw6i {
  fill: currentColor;
  d: path("M8.5 17V7h7v1h-6v3.5h6v1h-6V16h6v1z");
}
</style><path class="vxbclqw6i"/>`,
		"fallback": "material-symbols-light:e-mobiledata-sharp",
	});
}

export default Component;
