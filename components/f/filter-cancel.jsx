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
		"content": `<style>.ragk3hvhw {
  fill: currentColor;
  d: path("m15.9 18.512l-.708-.714l2.1-2.096l-2.1-2.096l.708-.714l2.106 2.112l2.086-2.112l.708.714l-2.08 2.086l2.08 2.106l-.708.714l-2.086-2.093zM9.27 19q-.328 0-.549-.221T8.5 18.23v-5.577L3.104 5.83q-.065-.066-.085-.152Q3 5.594 3 5.515q0-.198.143-.356Q3.286 5 3.519 5h11.962q.234 0 .376.161t.143.354q0 .077-.02.164q-.019.086-.084.152L10.5 12.654v5.577q0 .327-.221.548T9.73 19z");
}
</style><path class="ragk3hvhw"/>`,
		"fallback": "material-symbols-light:filter-cancel",
	});
}

export default Component;
