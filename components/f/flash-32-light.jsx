import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pwpovrhvw {
  fill: currentColor;
  d: path("M10.106 3.368A2 2 0 0 1 12.003 2h8.993a2 2 0 0 1 1.857 2.743L20.75 10h3.512c1.48 0 2.291 1.722 1.35 2.864L12.17 29.144a2.355 2.355 0 0 1-4.095-2.097L10.45 18H8.003a2 2 0 0 1-1.897-2.633zM12.003 3a1 1 0 0 0-.949.684l-4 12A1 1 0 0 0 8.003 17h3.096a.5.5 0 0 1 .483.627L9.043 27.3a1.355 1.355 0 0 0 2.357 1.207l13.44-16.28A.75.75 0 0 0 24.263 11h-4.25a.5.5 0 0 1-.464-.686l2.377-5.943A1 1 0 0 0 20.996 3z");
}
</style><path class="pwpovrhvw"/>`,
		"fallback": "fluent:flash-32-light",
	});
}

export default Component;
