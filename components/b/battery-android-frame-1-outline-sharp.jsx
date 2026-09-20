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
		"content": `<style>.ahvn-hknu {
  fill: currentColor;
  d: path("M2 17V7h17.885v10zm1-1h15.885V8H3zm17.885-1.884V9.904H22v4.212zm-16.5.5V9.385h1v5.23z");
}
</style><path class="ahvn-hknu"/>`,
		"fallback": "material-symbols-light:battery-android-frame-1-outline-sharp",
	});
}

export default Component;
