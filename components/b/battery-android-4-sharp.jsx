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
		"content": `<style>.ko0bhzb1j {
  fill: currentColor;
  d: path("M2 17V7h17.885v10zm10-1h6.885V8H12zm8.885-1.884V9.904H22v4.212z");
}
</style><path class="ko0bhzb1j"/>`,
		"fallback": "material-symbols-light:battery-android-4-sharp",
	});
}

export default Component;
