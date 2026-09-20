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
		"content": `<style>.m1-r1_zja {
  fill: currentColor;
  d: path("M15.654 12.5v-1h3.23v1zm1.085 6.462l-2.585-1.939l.623-.792l2.585 1.938zM14.7 7.692l-.623-.792l2.585-1.939l.623.793zM4.116 14v-4h3.423l3.577-3.577v11.154L7.539 14z");
}
</style><path class="m1-r1_zja"/>`,
		"fallback": "material-symbols-light:brand-awareness-sharp",
	});
}

export default Component;
