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
		"content": `<style>.ej593jxwf {
  fill: currentColor;
  d: path("M14.116 20.23v-1.69l1.307-4.039H7.269q-.633 0-1.066-.434q-.434-.433-.434-1.066V3.5h5v7h6q.595 0 1.028.415q.434.414.472 1.008l-2.153 6.616h1.719q.425 0 .699.21t.274.636t-.25.635t-.673.21zm-2.347-3.73H5.385q-.69 0-1.153-.462t-.463-1.153V3.5h1v11.385q0 .23.192.423t.423.192h6.385z");
}
</style><path class="ej593jxwf"/>`,
		"fallback": "material-symbols-light:airline-seat-legroom-reduced-outline",
	});
}

export default Component;
