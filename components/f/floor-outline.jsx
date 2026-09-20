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
		"content": `<style>.rbz_gwbjy {
  fill: currentColor;
  d: path("M3.5 21.5v-1H7V16h4.5v-4.5H16V7h4.5V3.5h1V8H17v4.5h-4.5V17H8v4.5z");
}
</style><path class="rbz_gwbjy"/>`,
		"fallback": "material-symbols-light:floor-outline",
	});
}

export default Component;
