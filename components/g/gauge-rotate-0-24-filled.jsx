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
		"content": `<style>.v-6t8dbgs {
  fill: currentColor;
  d: path("M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-.69 1.458c.244-.61 1.136-.61 1.38 0l.041.14c.392 1.924.8 3.847 1.125 5.783c.083.49.144.91.144 1.116a2 2 0 0 1-4 0c0-.206.061-.627.144-1.116c.257-1.534.806-4.239 1.125-5.782z");
}
</style><path class="v-6t8dbgs"/>`,
		"fallback": "fluent:gauge-rotate-0-24-filled",
	});
}

export default Component;
