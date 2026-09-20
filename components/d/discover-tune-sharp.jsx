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
		"content": `<style>.mt_1t0bqc {
  fill: currentColor;
  d: path("M13.5 8.5v-1h3v-4h1v4h3v1zm3 12v-9h1v9zm-10 0v-4h-3v-1h7v1h-3v4zm0-8v-9h1v9z");
}
</style><path class="mt_1t0bqc"/>`,
		"fallback": "material-symbols-light:discover-tune-sharp",
	});
}

export default Component;
