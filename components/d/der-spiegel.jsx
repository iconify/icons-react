import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b0dfm59-j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.784 15.61v-8.2a2.91 2.91 0 0 0-2.908-2.91H15.124a2.91 2.91 0 0 0-2.908 2.909V26.21h16.31v10.928h-9.052v-6.687h-7.258v10.14a2.91 2.91 0 0 0 2.908 2.908h17.752a2.91 2.91 0 0 0 2.908-2.909V19.85h-16.31v-8.989h9.052v4.748Z");
}
</style><path class="b0dfm59-j"/>`,
		"fallback": "arcticons:der-spiegel",
	});
}

export default Component;
