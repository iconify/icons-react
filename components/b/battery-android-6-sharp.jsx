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
		"content": `<style>.n97e2fn-c {
  fill: currentColor;
  d: path("M2 17V7h17.885v10zm14-1h2.885V8H16zm4.885-1.884V9.904H22v4.212z");
}
</style><path class="n97e2fn-c"/>`,
		"fallback": "material-symbols-light:battery-android-6-sharp",
	});
}

export default Component;
