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
		"content": `<style>.yo0f5mxgc {
  fill: currentColor;
  d: path("M8 20q-.425 0-.712-.288T7 19V5q0-.425.288-.712T8 4h8q.425 0 .713.288T17 5v14q0 .425-.288.713T16 20zm-5-3V6.975q0-.425.288-.7T4 6t.713.288T5 7v10.025q0 .425-.288.7T4 18t-.712-.288T3 17m16 0V6.975q0-.425.288-.7T20 6t.713.288T21 7v10.025q0 .425-.288.7T20 18t-.712-.288T19 17M9 18h6V6H9zm0 0V6z");
}
</style><path class="yo0f5mxgc"/>`,
		"fallback": "material-symbols:amp-stories-outline-rounded",
	});
}

export default Component;
