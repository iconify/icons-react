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
		"content": `<style>.j3j8cm8vw {
  fill: currentColor;
  d: path("M25.5 5.25a1.5 1.5 0 0 0-3 0v31.835L10.32 24.698a1.5 1.5 0 1 0-2.14 2.104l14.75 15l.031.03c.27.259.636.418 1.039.418a1.5 1.5 0 0 0 1.07-.448l14.75-15a1.5 1.5 0 1 0-2.14-2.104L25.5 37.085z");
}
</style><path class="j3j8cm8vw"/>`,
		"fallback": "fluent:arrow-down-48-filled",
	});
}

export default Component;
