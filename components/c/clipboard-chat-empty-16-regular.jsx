import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hqr5_0btk {
  fill: currentColor;
  d: path("M9.5 1a1.5 1.5 0 0 1 1.415 1h.585A1.5 1.5 0 0 1 13 3.5v2.1a5.5 5.5 0 0 0-1-.392V3.5a.5.5 0 0 0-.5-.5h-.585A1.5 1.5 0 0 1 9.5 4h-3a1.5 1.5 0 0 1-1.415-1H4.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h.584l-.021.07c-.093.31-.079.635.026.93H4.5A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2h.585A1.5 1.5 0 0 1 6.5 1zm-3 1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm4 4a4.5 4.5 0 1 1-2.133 8.46l-1.723.518a.5.5 0 0 1-.623-.622l.515-1.726A4.5 4.5 0 0 1 10.5 6m0 1a3.5 3.5 0 0 0-2.995 5.313a.5.5 0 0 1 .052.402l-.312 1.039l1.04-.31l.103-.02a.5.5 0 0 1 .3.07A3.5 3.5 0 1 0 10.5 7");
}
</style><path class="hqr5_0btk"/>`,
		"fallback": "fluent:clipboard-chat-empty-16-regular",
	});
}

export default Component;
