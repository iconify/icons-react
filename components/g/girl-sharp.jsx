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
		"content": `<style>.vjmz8i2uk {
  fill: currentColor;
  d: path("M10.763 6.988q-.513-.513-.513-1.238t.513-1.237T12 4t1.238.513t.512 1.237t-.513 1.238T12 7.5t-1.237-.513M10 20v-4H8l2.375-6.375q.2-.5.638-.812T12 8.5t.988.313t.637.812L16 16h-2v4z");
}
</style><path class="vjmz8i2uk"/>`,
		"fallback": "material-symbols:girl-sharp",
	});
}

export default Component;
