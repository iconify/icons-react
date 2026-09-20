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
		"content": `<style>.qbl3skaee {
  fill: currentColor;
  d: path("M7.423 20L12 15.423L16.577 20zM3 18V4h18v14h-4v-1h3V5H4v12h3v1zm9-6.5");
}
</style><path class="qbl3skaee"/>`,
		"fallback": "material-symbols-light:airplay-outline-sharp",
	});
}

export default Component;
