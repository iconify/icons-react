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
		"content": `<style>.asiw-ubyv {
  fill: currentColor;
  d: path("M7.749 16.255Q6 14.509 6 12.004t1.745-4.255T11.996 6t4.255 1.745Q18 9.491 18 11.996t-1.745 4.255T12.004 18t-4.255-1.745");
}
</style><path class="asiw-ubyv"/>`,
		"fallback": "material-symbols-light:fiber-manual-record",
	});
}

export default Component;
