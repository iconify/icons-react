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
		"content": `<style>.f0mddpnpo {
  fill: currentColor;
  d: path("M6.385 15.616h8.461v-4.462H6.385zm10.346-2.847h.884V8.385H9v.884h7.73zM3 19V5h18v14z");
}
</style><path class="f0mddpnpo"/>`,
		"fallback": "material-symbols-light:desktop-landscape-sharp",
	});
}

export default Component;
