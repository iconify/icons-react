import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jxrtc22jm {
  fill: currentColor;
  d: path("M8.406 2.852A1.33 1.33 0 0 1 9.65 2h8.516c.927 0 1.57.922 1.252 1.792L17.324 9.5h4.837c1.178 0 1.777 1.416.957 2.262L9.784 25.503c-1.14 1.175-3.106.117-2.753-1.482l1.66-7.521H5.917a1.917 1.917 0 0 1-1.787-2.61z");
}
</style><path class="jxrtc22jm"/>`,
		"fallback": "fluent:flash-28-filled",
	});
}

export default Component;
