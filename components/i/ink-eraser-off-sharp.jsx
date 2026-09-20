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
		"content": `<style>.hzli8abva {
  fill: currentColor;
  d: path("m19.833 21.26l-5.11-5.11L11.962 19H4.558l-2.55-2.55l6.388-6.627L2.74 4.167l.714-.713l17.092 17.092zm-3.016-7.254l-6.351-6.352l3.919-4.081l6.396 6.396z");
}
</style><path class="hzli8abva"/>`,
		"fallback": "material-symbols-light:ink-eraser-off-sharp",
	});
}

export default Component;
