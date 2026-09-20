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
		"content": `<style>.ymwn462gr {
  fill: currentColor;
  d: path("M5.2 22L3 2h18l-2.2 20zm1.375-6H17.45l1.3-12H5.25z");
}
</style><path class="ymwn462gr"/>`,
		"fallback": "material-symbols:glass-cup-sharp",
	});
}

export default Component;
