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
		"content": `<style>.qxkhzc6hx {
  fill: currentColor;
  d: path("M20 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h10v2H4v12h16v-7h2v7q0 .825-.587 1.413T20 20M6 16h7v-3H6zm0-5h7V8H6zm9 5h3v-5h-3zM4 18V6zm14-9V7h-2V5h2V3h2v2h2v2h-2v2z");
}
</style><path class="qxkhzc6hx"/>`,
		"fallback": "material-symbols:contextual-token-add-outline",
	});
}

export default Component;
