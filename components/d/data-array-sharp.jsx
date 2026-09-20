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
		"content": `<style>.gyt7kp80q {
  fill: currentColor;
  d: path("M15.423 19v-1H18V6h-2.577V5H19v14zM5 19V5h3.577v1H6v12h2.577v1z");
}
</style><path class="gyt7kp80q"/>`,
		"fallback": "material-symbols-light:data-array-sharp",
	});
}

export default Component;
