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
		"content": `<style>.rn-jp_zxx {
  fill: currentColor;
  d: path("M3.187 10.475L1.773 9.062q2.089-1.956 4.721-3.009T12 5t5.506 1.053t4.721 3.009l-1.413 1.413q-1.798-1.684-4.073-2.58T12 7t-4.74.895t-4.073 2.58M7.2 14.45l-1.408-1.408q1.264-1.22 2.861-1.872q1.597-.65 3.347-.65q1.77 0 3.386.66t2.88 1.9l-1.447 1.39q-.973-.95-2.212-1.45T12 12.52t-2.597.5T7.2 14.45m3.734 4.116q-.434-.433-.434-1.066t.434-1.066T12 16t1.066.434q.434.433.434 1.066t-.434 1.066Q12.633 19 12 19t-1.066-.434");
}
</style><path class="rn-jp_zxx"/>`,
		"fallback": "material-symbols-light:android-wifi-3-bar",
	});
}

export default Component;
