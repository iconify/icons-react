import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wrmy-5bec {
  fill: currentColor;
  d: path("M3 5v1.5a.5.5 0 0 1-.053.224L2.31 8h7.382l-.638-1.276A.5.5 0 0 1 9 6.5V5a3 3 0 0 0-6 0m1 4H1.5a.5.5 0 0 1-.447-.724L2 6.382V5a4 4 0 1 1 8 0v1.382l.947 1.894A.5.5 0 0 1 10.5 9H8a2 2 0 1 1-4 0m3 0H5a1 1 0 0 0 2 0");
}
</style><path class="wrmy-5bec"/>`,
		"fallback": "fluent:alert-12-regular",
	});
}

export default Component;
