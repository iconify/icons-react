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
		"content": `<style>.ccv395bda {
  fill: currentColor;
  d: path("M10.809 5.268q-.501-.5-.501-1.191q0-.69.5-1.191q.502-.502 1.192-.502t1.191.502q.501.5.501 1.191q0 .69-.5 1.191q-.502.501-1.192.501t-1.191-.5M9.808 21.5V8.423H3.962v-1h16.077v1h-5.847V21.5h-1V16h-2.384v5.5z");
}
</style><path class="ccv395bda"/>`,
		"fallback": "material-symbols-light:accessibility-sharp",
	});
}

export default Component;
