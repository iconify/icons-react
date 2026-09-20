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
		"content": `<style>.v0smrnbzx {
  fill: currentColor;
  d: path("M1 18V6h15v2H3v8h13v2zm17-2v-3h-3v-2h3V8h2v3h3v2h-3v3zM4 15V9h9v6z");
}
</style><path class="v0smrnbzx"/>`,
		"fallback": "material-symbols:battery-android-frame-plus-sharp",
	});
}

export default Component;
