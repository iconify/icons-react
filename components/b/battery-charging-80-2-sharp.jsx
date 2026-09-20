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
		"content": `<style>.fa_uvkbrm {
  fill: currentColor;
  d: path("M2 17V7h14.25l-1.6 2H13v6h2l-.35 2zm14.675 0l.7-4H14l4.8-6h.525l-.7 4H22l-4.8 6z");
}
</style><path class="fa_uvkbrm"/>`,
		"fallback": "material-symbols:battery-charging-80-2-sharp",
	});
}

export default Component;
