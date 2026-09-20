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
		"content": `<style>.og6yeubov {
  fill: currentColor;
  d: path("M5 20v-1h14v1zM17.308 8.5h2q.288 0 .49-.183T20 7.865v-2.23q0-.27-.202-.452Q19.596 5 19.308 5h-2zM5 16.23V4h4.116v2.17L7.385 7.595v3.75h4.23v-3.75L9.886 6.17V4h9.423q.69 0 1.191.472t.5 1.162v2.231q0 .69-.501 1.163q-.501.472-1.191.472h-2v6.73z");
}
</style><path class="og6yeubov"/>`,
		"fallback": "material-symbols-light:emoji-food-beverage-sharp",
	});
}

export default Component;
