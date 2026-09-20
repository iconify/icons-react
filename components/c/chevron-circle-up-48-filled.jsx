import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tc6mgdbpj {
  fill: currentColor;
  d: path("M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4m-8.616 23.634L24 19.018l8.616 8.616a1.25 1.25 0 0 0 1.768-1.768l-9.5-9.5a1.25 1.25 0 0 0-1.768 0l-9.5 9.5a1.25 1.25 0 0 0 1.768 1.768");
}
</style><path class="tc6mgdbpj"/>`,
		"fallback": "fluent:chevron-circle-up-48-filled",
	});
}

export default Component;
