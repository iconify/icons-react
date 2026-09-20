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
		"content": `<style>.qb164absy {
  fill: currentColor;
  d: path("M5.4 20L4 18.6L15.6 7H9V5h10v10h-2V8.4z");
}
</style><path class="qb164absy"/>`,
		"fallback": "material-symbols:call-made",
	});
}

export default Component;
