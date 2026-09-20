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
		"content": `<style>.rera8xt7n {
  fill: currentColor;
  d: path("M2 21V6h5V2h10v4h5v15zM9 6h6V4H9zM4 17h16v-3H4z");
}
</style><path class="rera8xt7n"/>`,
		"fallback": "material-symbols:card-travel-sharp",
	});
}

export default Component;
