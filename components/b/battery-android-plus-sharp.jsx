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
		"content": `<style>.hy3pwhbph {
  fill: currentColor;
  d: path("M2 17V7h14.116v2.116h-3v5.769h3V17zm16.5-1.5v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="hy3pwhbph"/>`,
		"fallback": "material-symbols-light:battery-android-plus-sharp",
	});
}

export default Component;
