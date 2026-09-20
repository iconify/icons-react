import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rhe92u-ik {
  fill: currentColor;
  d: path("M4 4.708L2.147 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-1.854-1.855A8 8 0 0 1 4 4.707M14.585 15.29L4.709 5.416a7 7 0 0 0 9.874 9.874M17 10c0 1.39-.405 2.686-1.104 3.775l.722.721A8 8 0 0 0 5.504 3.382l.721.722A7 7 0 0 1 17 10");
}
</style><path class="rhe92u-ik"/>`,
		"fallback": "fluent:circle-off-20-regular",
	});
}

export default Component;
