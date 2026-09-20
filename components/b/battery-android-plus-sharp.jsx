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
		"content": `<style>.dd3c0-b0p {
  fill: currentColor;
  d: path("M1 18V6h15v3h-3v6h3v3zm17-2v-3h-3v-2h3V8h2v3h3v2h-3v3z");
}
</style><path class="dd3c0-b0p"/>`,
		"fallback": "material-symbols:battery-android-plus-sharp",
	});
}

export default Component;
