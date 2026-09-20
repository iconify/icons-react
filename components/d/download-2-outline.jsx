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
		"content": `<style>.mkjvg-bdb {
  fill: currentColor;
  d: path("M5 21v-1h14v1zm6.98-3.77L6.367 9.79h3.269V3h4.711v6.789h3.27zm0-1.634l3.574-4.788h-2.208V4h-2.711v6.808H8.427zm.02-4.788");
}
</style><path class="mkjvg-bdb"/>`,
		"fallback": "material-symbols-light:download-2-outline",
	});
}

export default Component;
