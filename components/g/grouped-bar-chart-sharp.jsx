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
		"content": `<style>.nrrewpbye {
  fill: currentColor;
  d: path("M5 19V8.712h3V19zm4.385 0v-5.654h3V19zM16 19V5h3v14z");
}
</style><path class="nrrewpbye"/>`,
		"fallback": "material-symbols-light:grouped-bar-chart-sharp",
	});
}

export default Component;
