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
		"content": `<style>.xji8wacnw {
  fill: currentColor;
  d: path("M3 4V3h18v1zm0 17v-1h18v1zm8-4.5V7h2v9.5z");
}
</style><path class="xji8wacnw"/>`,
		"fallback": "material-symbols-light:align-self-stretch",
	});
}

export default Component;
