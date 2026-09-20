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
		"content": `<style>.zjtpudb2n {
  fill: currentColor;
  d: path("M10.135 14.5V9.73h-.443q-1.4 0-2.373-.982t-.973-2.382t.973-2.383T9.692 3h6.231v1h-1.884v10.5h-1V4h-1.905v10.5zm6.692 6.5l-.708-.708l1.966-1.965H4v-1h14.066L16.1 15.361l.727-.726L20 17.808z");
}
</style><path class="zjtpudb2n"/>`,
		"fallback": "material-symbols-light:format-textdirection-l-to-r",
	});
}

export default Component;
