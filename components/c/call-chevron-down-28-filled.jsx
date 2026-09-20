import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cq4mgq44j {
  fill: currentColor;
  d: path("M4.093 2.883c1.12-.72 2.553-.996 3.968-.803l.246.034a2.75 2.75 0 0 1 2.088 1.495l1.291 2.581a3.25 3.25 0 0 1-1.104 4.158l-1.708 1.138c-.397.265-.508.632-.42.9c.53 1.614 1.94 3.802 3.169 5.055c.23.236.648.305 1.076.07l1.304-.717a3.75 3.75 0 0 1 5.1 1.49l1.041 1.911c.443.812.448 1.792.014 2.609c-1.45 2.725-4.757 4.238-7.564 2.401c-2.393-1.567-5.335-4.162-7.742-8.33c-2.442-4.23-2.93-7.896-2.78-10.55c.087-1.532.886-2.713 2.021-3.442M24.22 5.72a.75.75 0 0 1 1.06 1.06l-4.75 4.75a.75.75 0 0 1-1.06 0l-4.75-4.75a.75.75 0 0 1 1.06-1.06L20 9.94z");
}
</style><path class="cq4mgq44j"/>`,
		"fallback": "fluent:call-chevron-down-28-filled",
	});
}

export default Component;
