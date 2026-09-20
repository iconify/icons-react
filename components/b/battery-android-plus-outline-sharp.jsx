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
		"content": `<style>.v7irxxbgk {
  fill: currentColor;
  d: path("M3 16V8zm-2 2V6h15v2H3v8h13v2zm17-2v-3h-3v-2h3V8h2v3h3v2h-3v3z");
}
</style><path class="v7irxxbgk"/>`,
		"fallback": "material-symbols:battery-android-plus-outline-sharp",
	});
}

export default Component;
