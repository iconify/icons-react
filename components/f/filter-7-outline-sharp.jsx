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
		"content": `<style>.jrqzsqedq {
  fill: currentColor;
  d: path("M11.154 14.5h1.038L16 6.5v-1h-5v1h3.962zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-4V4z");
}
</style><path class="jrqzsqedq"/>`,
		"fallback": "material-symbols-light:filter-7-outline-sharp",
	});
}

export default Component;
