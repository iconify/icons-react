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
		"content": `<style>.ww1t8w1nb {
  fill: currentColor;
  d: path("M24 44c-.69 0-1.25-.56-1.25-1.25V10.304L10.14 23.126a1.25 1.25 0 1 1-1.782-1.752L23.097 6.386l.026-.027a1.25 1.25 0 0 1 1.009-.352a1.25 1.25 0 0 1 .785.393l14.724 14.974a1.25 1.25 0 1 1-1.782 1.752l-12.61-12.822V42.75c0 .69-.559 1.25-1.25 1.25");
}
</style><path class="ww1t8w1nb"/>`,
		"fallback": "fluent:arrow-up-48-regular",
	});
}

export default Component;
