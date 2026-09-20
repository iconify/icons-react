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
		"content": `<style>.kjb024bcl {
  fill: currentColor;
  d: path("M6 17v-3H3v-2h3V9h2v3h3v2H8v3zm9.75 2V8.05l-2.3 1.65l-1.15-1.75L16.4 5H18v14z");
}
</style><path class="kjb024bcl"/>`,
		"fallback": "material-symbols:exposure-plus-1",
	});
}

export default Component;
