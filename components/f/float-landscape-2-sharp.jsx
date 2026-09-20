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
		"content": `<style>.m10txfbrs {
  fill: currentColor;
  d: path("M12.616 14.385h5v-6h-5zM3 19V5h18v14z");
}
</style><path class="m10txfbrs"/>`,
		"fallback": "material-symbols-light:float-landscape-2-sharp",
	});
}

export default Component;
