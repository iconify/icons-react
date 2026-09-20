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
		"content": `<style>.x1ip7u_1u {
  fill: currentColor;
  d: path("M21.88 19.656a.75.75 0 0 1-.63.344h-7.5a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.433-.31l7.5 16.5a.75.75 0 0 1-.052.716M14.5 6.213V18.5h5.585zM2.5 20a.5.5 0 0 1-.452-.713l8-17A.5.5 0 0 1 11 2.5v17a.5.5 0 0 1-.5.5z");
}
</style><path class="x1ip7u_1u"/>`,
		"fallback": "fluent:flip-horizontal-24-regular",
	});
}

export default Component;
