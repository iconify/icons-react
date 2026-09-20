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
		"content": `<style>.bzeq_uclt {
  fill: currentColor;
  d: path("M2 20V4h20v16z");
}
</style><path class="bzeq_uclt"/>`,
		"fallback": "material-symbols:crop-landscape-sharp",
	});
}

export default Component;
