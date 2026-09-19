import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.riwc11bre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.004 5.549l-13.101 7.514h26.202zM5.5 39.374h37v3.077h-37zM7.188 13.07h33.64v3.083H7.188zm.84 23.121h31.96v3.077H8.028zm2.374-20.038h3.312V36.19h-3.312zm6.936 0h3.312V36.19h-3.312zm16.954 0h3.313V36.19h-3.313zm-6.936 0h3.313V36.19h-3.313z");
}
</style><path class="riwc11bre"/>`,
		"fallback": "arcticons:emoji-classical-building",
	});
}

export default Component;
