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
		"content": `<style>.hgcl4nbkr {
  fill: currentColor;
  d: path("M2 17V7h17.885v10zm12-1h4.885V8H14zm6.885-1.884V9.904H22v4.212z");
}
</style><path class="hgcl4nbkr"/>`,
		"fallback": "material-symbols-light:battery-android-5-outline-sharp",
	});
}

export default Component;
