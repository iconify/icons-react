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
		"content": `<style>.ynxbl1b6d {
  fill: currentColor;
  d: path("M2 17V7h17.885v10zm18.885-2.884V9.904H22v4.212z");
}
</style><path class="ynxbl1b6d"/>`,
		"fallback": "material-symbols-light:battery-android-full-outline-sharp",
	});
}

export default Component;
