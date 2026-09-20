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
		"content": `<style>.ypbo53bfx {
  fill: currentColor;
  d: path("M5 16v-2h14v2zm0-6V8h14v2z");
}
</style><path class="ypbo53bfx"/>`,
		"fallback": "material-symbols-light:equal",
	});
}

export default Component;
