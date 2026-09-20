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
		"content": `<style>.vhe00d0pq {
  fill: currentColor;
  d: path("M15.002 8.999H9.005v-2.25a.75.75 0 0 0-1.267-.542l-5.504 5.25a.75.75 0 0 0 0 1.086l5.504 5.25l.082.068a.75.75 0 0 0 1.186-.611L9.005 15h5.997v2.25a.75.75 0 0 0 1.268.542l5.497-5.25a.75.75 0 0 0 0-1.085l-5.497-5.25a.75.75 0 0 0-1.268.543zm-11.164 3l3.667-3.498v1.248c0 .415.336.75.75.75h7.497l.102-.007a.75.75 0 0 0 .648-.743V8.503L20.162 12l-3.66 3.496V14.25a.75.75 0 0 0-.75-.75H8.256l-.102.007a.75.75 0 0 0-.648.743l-.001 1.248z");
}
</style><path class="vhe00d0pq"/>`,
		"fallback": "fluent:arrows-bidirectional-24-regular",
	});
}

export default Component;
