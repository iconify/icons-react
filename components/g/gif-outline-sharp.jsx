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
		"content": `<style>.uc9ysrlav {
  fill: currentColor;
  d: path("M11.5 15V9H13v6zM5 15V9h5v1.5H6.5v3h2V12H10v3zm9.5 0V9H19v1.5h-3v1h2V13h-2v2z");
}
</style><path class="uc9ysrlav"/>`,
		"fallback": "material-symbols:gif-outline-sharp",
	});
}

export default Component;
