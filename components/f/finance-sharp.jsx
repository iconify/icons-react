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
		"content": `<style>.k2ftrtbih {
  fill: currentColor;
  d: path("M3.5 20V3h1v16h16v1zm3.885-3.5V9.192h2V16.5zm4.5 0V4.192h2V16.5zm4.5 0v-3.308h2V16.5z");
}
</style><path class="k2ftrtbih"/>`,
		"fallback": "material-symbols-light:finance-sharp",
	});
}

export default Component;
