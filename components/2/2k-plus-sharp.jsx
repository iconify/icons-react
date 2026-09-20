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
		"content": `<style>.c2qudgb9q {
  fill: currentColor;
  d: path("M16.73 13.885h.77v-1.5H19v-.77h-1.5v-1.5h-.77v1.5h-1.5v.77h1.5zm-5.21.807h.884v-2.365l2.288 2.365h1.212l-2.635-2.73l2.635-2.654H14.73l-2.327 2.327V9.308h-.885zm-5.135 0h3.769v-.884H7.269v-1.423h2.885V9.308h-3.77v.884H9.27v1.424H6.385zM4 20V4h16v16z");
}
</style><path class="c2qudgb9q"/>`,
		"fallback": "material-symbols-light:2k-plus-sharp",
	});
}

export default Component;
