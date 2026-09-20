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
		"content": `<style>.njj0_t8pt {
  fill: currentColor;
  d: path("M2 17V7h17.885v10zm8-1h8.885V8H10zm10.885-1.884V9.904H22v4.212z");
}
</style><path class="njj0_t8pt"/>`,
		"fallback": "material-symbols-light:battery-android-3-sharp",
	});
}

export default Component;
