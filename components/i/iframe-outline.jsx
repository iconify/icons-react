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
		"content": `<style>.grli47bwr {
  fill: currentColor;
  d: path("M11.192 13.808h5.616v-2.616h-5.616zm-.884.884v-4.384h7.384v4.384zM4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V8H4v9.385q0 .23.192.423t.423.192");
}
</style><path class="grli47bwr"/>`,
		"fallback": "material-symbols-light:iframe-outline",
	});
}

export default Component;
