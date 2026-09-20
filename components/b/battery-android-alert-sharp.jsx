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
		"content": `<style>.ztt7er2qa {
  fill: currentColor;
  d: path("M1 18V6h17v10q0 .575.213 1.088t.562.912zm19-5V7h2v6zm.288 3.213Q20 15.924 20 15.5t.288-.712T21 14.5t.713.288t.287.712t-.288.713T21 16.5t-.712-.288");
}
</style><path class="ztt7er2qa"/>`,
		"fallback": "material-symbols:battery-android-alert-sharp",
	});
}

export default Component;
