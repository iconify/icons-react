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
		"content": `<style>.bk199t78y {
  fill: currentColor;
  d: path("M8.23 11.77v-1.54h1.54v1.54zm6 0v-1.54h1.54v1.54zM4 21v-6.577h1V10q0-1.458.548-2.728t1.501-2.223t2.235-1.501T12.012 3t2.716.548t2.223 1.501t1.501 2.223T19 10v4.423h1V21zm1-1h2.5v-4.577H5zm3.5 0h3v-4.577h-3zM6 14.423h5.5V4.037q-2.13.119-3.815 1.781Q6 7.481 6 10zm6.5 0H18V10q0-2.52-1.684-4.182Q14.63 4.156 12.5 4.037zm0 5.577h3v-4.577h-3zm4 0H19v-4.577h-2.5z");
}
</style><path class="bk199t78y"/>`,
		"fallback": "material-symbols-light:balcony-outline",
	});
}

export default Component;
