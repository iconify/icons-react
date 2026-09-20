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
		"content": `<style>.ctwagt0jk {
  fill: currentColor;
  d: path("M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-19.866 8.634a1.25 1.25 0 0 0 0-1.768l-5.616-5.616H32.75a1.25 1.25 0 1 0 0-2.5H18.518l5.616-5.616a1.25 1.25 0 0 0-1.768-1.768l-7.75 7.75a1.25 1.25 0 0 0 0 1.768l7.75 7.75a1.25 1.25 0 0 0 1.768 0");
}
</style><path class="ctwagt0jk"/>`,
		"fallback": "fluent:arrow-circle-left-48-filled",
	});
}

export default Component;
