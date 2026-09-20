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
		"content": `<style>.dg5ib972w {
  fill: currentColor;
  d: path("m15.904 15.5l2.904-2.904V5h-7.596L8.308 7.904h7.596zM11 20.404l2.904-2.904V9.904H6.308l-2.904 2.904H11z");
}
</style><path class="dg5ib972w"/>`,
		"fallback": "material-symbols-light:azm",
	});
}

export default Component;
