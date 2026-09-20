import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s4p8mbb0x {
  fill: currentColor;
  d: path("M10 7.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5H4.47a.5.5 0 0 0 0 1h4.823L7.146 4.146a.5.5 0 1 0 .708.708L10 2.707zM6.354 6.354a.5.5 0 1 0-.708-.708l-1.5 1.5a.5.5 0 1 0 .708.708zm-3 3a.5.5 0 1 0-.708-.708l-1.5 1.5a.5.5 0 0 0 .708.708z");
}
</style><path class="s4p8mbb0x"/>`,
		"fallback": "fluent:arrow-up-right-dashes-12-regular",
	});
}

export default Component;
