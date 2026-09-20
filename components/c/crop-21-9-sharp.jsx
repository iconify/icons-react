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
		"content": `<style>.vrjrc8b7q {
  fill: currentColor;
  d: path("M2 17V7h20v10z");
}
</style><path class="vrjrc8b7q"/>`,
		"fallback": "material-symbols:crop-21-9-sharp",
	});
}

export default Component;
