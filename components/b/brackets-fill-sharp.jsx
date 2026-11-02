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
		"content": `<style>.yie9aac_c {
  fill: currentColor;
  d: path("M5 8v8h2a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2Zm15-2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h2V8h-2a1 1 0 0 1 0-2Z");
}
</style><path class="yie9aac_c"/>`,
		"fallback": "coolicons:brackets-fill-sharp",
	});
}

export default Component;
