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
		"content": `<style>.bo76n9bso {
  fill: currentColor;
  d: path("M12.04 8.04h-.09l-1.6 4.55h3.29z");
}

.c2sld4byo {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m3.21 15l-.98-2.81H9.78l-1 2.81h-1.9l4.13-11h1.97l4.13 11z");
}
</style><path class="bo76n9bso"/><path class="c2sld4byo"/>`,
		"fallback": "ic:baseline-hdr-auto",
	});
}

export default Component;
