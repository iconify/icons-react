import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lpfj2qbmg {
  fill: currentColor;
  d: path("M4.211 12.733a.75.75 0 1 0 1.081 1.04l7.96-8.275v18.753a.75.75 0 1 0 1.5 0V5.5l7.958 8.274a.75.75 0 0 0 1.081-1.04l-9.069-9.428a1 1 0 0 0-1.441 0z");
}
</style><path class="lpfj2qbmg"/>`,
		"fallback": "fluent:arrow-up-28-regular",
	});
}

export default Component;
