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
		"content": `<style>.fszl7_bhp {
  fill: currentColor;
  d: path("M12.616 14.385h5v-6h-5zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="fszl7_bhp"/>`,
		"fallback": "material-symbols-light:float-landscape-2-outline-sharp",
	});
}

export default Component;
