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
		"content": `<style>.ijt0sqbrt {
  fill: currentColor;
  d: path("M6.385 15.616h8.461v-4.462H6.385zm10.346-2.847h.884V8.385H9v.884h7.73zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="ijt0sqbrt"/>`,
		"fallback": "material-symbols-light:desktop-landscape-outline-sharp",
	});
}

export default Component;
