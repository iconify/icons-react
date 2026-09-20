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
		"content": `<style>.qsqpq_uyo {
  fill: currentColor;
  d: path("M16.712 18h4.673v1H15.71zM4.558 19l-2.55-2.55L14.385 3.573l6.377 6.377l-8.8 9.05zm6.977-1l7.85-8.05L14.435 5L3.385 16.4l1.6 1.6zM12 12");
}
</style><path class="qsqpq_uyo"/>`,
		"fallback": "material-symbols-light:ink-eraser-outline-sharp",
	});
}

export default Component;
