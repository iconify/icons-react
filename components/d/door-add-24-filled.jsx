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
		"content": `<style>.kq1z4xv5j {
  fill: currentColor;
  d: path("M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m.25-10A2.25 2.25 0 0 1 20 4.25v7.248A6.5 6.5 0 0 0 12.812 22H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2zm-.25 11.999a.5.5 0 0 0-.5.5V17h-2.505a.5.5 0 0 0 0 1h2.506v2.504a.5.5 0 0 0 1 0V18h2.496a.5.5 0 0 0 0-1H18v-2.501a.5.5 0 0 0-.5-.5m-9-3.749a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3");
}
</style><path class="kq1z4xv5j"/>`,
		"fallback": "fluent:door-add-24-filled",
	});
}

export default Component;
